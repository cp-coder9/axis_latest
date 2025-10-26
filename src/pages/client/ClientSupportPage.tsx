const ClientSupportPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Help & Support</h1>
      <p className="text-gray-500 mb-8">This page is for getting help and support.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">How do I view my invoices?</h2>
          <p className="text-gray-500">You can view your invoices in the "Earnings" section of your dashboard.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">How do I contact my project manager?</h2>
          <p className="text-gray-500">You can contact your project manager through the "Messages" section of your dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default ClientSupportPage;
