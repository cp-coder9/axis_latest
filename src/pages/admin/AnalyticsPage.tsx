const AnalyticsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Analytics</h1>
      <p className="text-gray-500 mb-8">This page is for viewing system analytics.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">User Registrations</h2>
          <div className="h-64 bg-gray-200 rounded-md"></div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2 text-brand-text">Project Status</h2>
          <div className="h-64 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
