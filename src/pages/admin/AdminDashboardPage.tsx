const AdminDashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Admin Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome to the admin dashboard. Here you can manage users, view analytics, and monitor system activity.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Users</h2>
          <p className="text-gray-500">Manage user accounts and permissions.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Analytics</h2>
          <p className="text-gray-500">View system analytics and generate reports.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">System Activity</h2>
          <p className="text-gray-500">Monitor real-time system activity.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
