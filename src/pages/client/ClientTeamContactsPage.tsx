const ClientTeamContactsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Team Contacts</h1>
      <p className="text-gray-500 mb-8">This page is for viewing a directory of all project team members.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-brand-text">Alice</h2>
            <p className="text-gray-500">Role: Admin</p>
          </div>
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Message</button>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-brand-text">Bob</h2>
            <p className="text-gray-500">Role: Freelancer</p>
          </div>
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Message</button>
        </div>
      </div>
    </div>
  );
};

export default ClientTeamContactsPage;
