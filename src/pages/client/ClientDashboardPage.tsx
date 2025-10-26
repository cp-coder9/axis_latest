const ClientDashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Client Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome to the client dashboard. Here you can view your projects, communicate with the team, and access your files.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Projects</h2>
          <p className="text-gray-500">View your active and completed projects.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Messages</h2>
          <p className="text-gray-500">Communicate with your project team.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Files</h2>
          <p className="text-gray-500">Access your project files and documents.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardPage;
