import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css"; // ← Must be imported

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

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

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Show red error messages
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("careerbuddy_users") || "[]");
      const userExists = users.some((user) => user.email === formData.email);

      if (userExists) {
        setErrors({ general: "This email is already registered." });
        setIsLoading(false);
        return;
      }

      // Save new user
      users.push({
        id: Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password, // Note: Never store plain text in real apps
        role: "Student",
        joinDate: new Date().toISOString().split("T")[0],
      });

      localStorage.setItem("careerbuddy_users", JSON.stringify(users));
      alert("✅ Account created! Please log in.");
      navigate("/login");
    }, 800);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {/* Header */}
        <div className="signup-header">
          <h2>Create Account</h2>
          <p>Join CareerBuddy today — it's free!</p>
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="error-box">
            {errors.general}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={isLoading} className="btn-primary">
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Sign In Link */}
        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="link">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;