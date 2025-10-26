const ClientNotificationsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Notifications</h1>
      <p className="text-gray-500 mb-8">This page is for viewing and managing all notifications.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>You have a new message from <span className="font-bold text-brand-text">Alice</span>.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Your invoice for <span className="font-bold text-brand-text">Project Delta</span> is ready.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientNotificationsPage;
