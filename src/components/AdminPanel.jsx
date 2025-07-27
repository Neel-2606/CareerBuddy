import React from 'react';

function AdminPanel() {
  return (
    <section id="admin" className="section admin-panel" style={{ display: "none" }}>
      <h2>Admin Panel</h2>
      <p>
        This section is visible only to admins. Here, admins can manage user data, feedback, and system analytics.
      </p>
    </section>
  );
}

export default AdminPanel;

