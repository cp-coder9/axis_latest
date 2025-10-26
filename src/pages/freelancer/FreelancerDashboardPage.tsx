const FreelancerDashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Freelancer Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome to the freelancer dashboard. Here you can track your time, manage projects, and view your earnings.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Time Tracker</h2>
          <p className="text-gray-500">Track your work hours and manage time logs.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Projects</h2>
          <p className="text-gray-500">View your assigned and available projects.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Earnings</h2>
          <p className="text-gray-500">Track your earnings and manage invoices.</p>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboardPage;
