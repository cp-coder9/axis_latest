const ClientSharedDocumentsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Shared Documents</h1>
      <p className="text-gray-500 mb-8">This page is for viewing documents shared with the client.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-brand-text">Final_Proposal.pdf</h2>
            <p className="text-gray-500">Shared on: 2025-10-21</p>
          </div>
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Download</button>
        </div>
      </div>
    </div>
  );
};

export default ClientSharedDocumentsPage;
