const ClientProjectMilestonesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Project Milestones</h1>
      <p className="text-gray-500 mb-8">This page is for dedicated milestone tracking view.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">Milestone 1: Project Kick-off</h2>
          <p className="text-gray-500">Status: Completed</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">Milestone 2: Design Phase</h2>
          <p className="text-gray-500">Status: In Progress</p>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectMilestonesPage;
