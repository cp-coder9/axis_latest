const FreelancerAvailableProjectsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Available Projects</h1>
      <p className="text-gray-500 mb-8">This page is for browsing and applying to new project opportunities.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-brand-text">Project Zeta</h2>
            <p className="text-gray-500">Posted: 2 days ago</p>
          </div>
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerAvailableProjectsPage;
