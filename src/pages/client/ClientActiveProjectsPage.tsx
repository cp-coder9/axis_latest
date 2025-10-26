const ClientActiveProjectsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Active Projects</h1>
      <p className="text-gray-500 mb-8">This page is for viewing a list of currently in-progress projects.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-brand-text">Project Gamma</h2>
            <p className="text-gray-500">Status: In Progress</p>
          </div>
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">View</button>
        </div>
      </div>
    </div>
  );
};

export default ClientActiveProjectsPage;
