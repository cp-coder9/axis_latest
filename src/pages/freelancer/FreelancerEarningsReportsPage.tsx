const FreelancerEarningsReportsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Earnings Reports</h1>
      <p className="text-gray-500 mb-8">This page is for generating and downloading earnings reports.</p>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-brand-text">Generate New Report</h2>
        <div className="flex space-x-4">
          <input type="date" className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
          <input type="date" className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
          <button className="px-4 py-2 bg-brand-primary text-white rounded-md">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerEarningsReportsPage;
