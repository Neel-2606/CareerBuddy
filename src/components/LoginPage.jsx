import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // ← Import CSS

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      if (formData.email === "admin@careerbuddy.com" && formData.password === "admin123") {
        localStorage.setItem("careerbuddy_token", "dummy_admin_token");
        localStorage.setItem("admin_name", "John Admin");
        navigate("/admin");
      } else {
        setErrors({ general: "Invalid email or password" });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src="/logo.jpg" alt="Career Buddy Logo" />
          <h2>Welcome to CareerBuddy</h2>
          <p>Sign in to continue</p>
        </div>

        {errors.general && (
          <div className="general-error">{errors.general}</div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={errors.password ? "error" : ""}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>

          <button type="submit" disabled={isLoading} className="login-btn">
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="forgot-password" onClick={() => alert("Password recovery not implemented")}>
          Forgot your password?
        </div>

        <div className="signup-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </div>

        
      </div>
    </div>
  );
};

export default LoginPage;