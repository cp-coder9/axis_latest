const FreelancerAssignedProjectsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Assigned Projects</h1>
      <p className="text-gray-500 mb-8">This page is for viewing all projects currently assigned to the freelancer.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-brand-text">Project Epsilon</h2>
            <p className="text-gray-500">Status: In Progress</p>
          </div>
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">View</button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerAssignedProjectsPage;
