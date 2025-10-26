const ClientProjectTimelinePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Project Timeline</h1>
      <p className="text-gray-500 mb-8">This page is for viewing a chronological view of all project milestones.</p>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200">
        <div className="relative pl-10">
          <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-brand-primary"></div>
          <h2 className="font-bold text-brand-text">October 23, 2025</h2>
          <p className="text-gray-500">Project Kick-off Meeting</p>
        </div>
        <div className="relative pl-10">
          <div className="absolute left-0 top-0 h-5 w-5 rounded-full bg-brand-primary"></div>
          <h2 className="font-bold text-brand-text">November 5, 2025</h2>
          <p className="text-gray-500">Design Phase Begins</p>
        </div>
      </div>
    </div>
  );
};

export default ClientProjectTimelinePage;
