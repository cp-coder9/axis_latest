const ClientActivityPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Recent Activity</h1>
      <p className="text-gray-500 mb-8">This page is for viewing a timeline of all project activities.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p><span className="font-bold text-brand-text">Alice</span> uploaded a new document: <span className="text-brand-primary">Final_Proposal.pdf</span></p>
          <p className="text-xs text-gray-400">2 hours ago</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p><span className="font-bold text-brand-text">Bob</span> sent a new message.</p>
          <p className="text-xs text-gray-400">1 day ago</p>
        </div>
      </div>
    </div>
  );
};

export default ClientActivityPage;
