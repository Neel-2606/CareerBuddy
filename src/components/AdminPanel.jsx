"use client"

import { useState, useEffect } from "react"

const AdminPanel = ({ onLogout }) => {
  const [adminName, setAdminName] = useState("")
  const [users, setUsers] = useState([])
  const [showAddUser, setShowAddUser] = useState(false)
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Student" })

  useEffect(() => {
    const name = localStorage.getItem("admin_name") || "Admin"
    setAdminName(name)
    loadUsers()
  }, [])

  const loadUsers = () => {
    const savedUsers = JSON.parse(localStorage.getItem("careerbuddy_users") || "[]")
    setUsers(savedUsers)
  }

  const handleAddUser = (e) => {
    e.preventDefault()
    if (!newUser.name || !newUser.email) {
      alert("Please fill all fields")
      return
    }

    const user = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      joinDate: new Date().toISOString().split("T")[0],
    }

    const updatedUsers = [...users, user]
    setUsers(updatedUsers)
    localStorage.setItem("careerbuddy_users", JSON.stringify(updatedUsers))
    setNewUser({ name: "", email: "", role: "Student" })
    setShowAddUser(false)
    alert("User added successfully!")
  }

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((user) => user.id !== userId)
      setUsers(updatedUsers)
      localStorage.setItem("careerbuddy_users", JSON.stringify(updatedUsers))
      alert("User deleted successfully!")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("careerbuddy_token")
    localStorage.removeItem("admin_name")
    onLogout()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">CareerBuddy Admin</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hi, {adminName}!</span>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Simple Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-blue-800">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">{users.length}</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-green-800">Students</h3>
            <p className="text-3xl font-bold text-green-600">
              {users.filter((user) => user.role === "Student").length}
            </p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-purple-800">Mentors</h3>
            <p className="text-3xl font-bold text-purple-600">
              {users.filter((user) => user.role === "Mentor").length}
            </p>
          </div>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Manage Users</h2>
            <button
              onClick={() => setShowAddUser(!showAddUser)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              {showAddUser ? "Cancel" : "Add User"}
            </button>
          </div>

          {/* Add User Form */}
          {showAddUser && (
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3">Add New User</h3>
              <form onSubmit={handleAddUser} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Student">Student</option>
                  <option value="Mentor">Mentor</option>
                </select>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Add User
                </button>
              </form>
            </div>
          )}

          {/* Users Table */}
          <div className="overflow-x-auto">
            {users.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No users found. Add some users to get started!</p>
              </div>
            ) : (
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Role</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Join Date</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{user.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            user.role === "Mentor" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.joinDate}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
