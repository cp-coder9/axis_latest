const ClientMeetingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Meetings</h1>
      <p className="text-gray-500 mb-8">This page is for viewing the meeting schedule.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">Project Gamma Kick-off</h2>
          <p className="text-gray-500">Date: 2025-10-23 at 10:00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default ClientMeetingsPage;
