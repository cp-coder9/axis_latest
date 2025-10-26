const HelpPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Help & Support</h1>
      <p className="text-gray-500 mb-8">This page is for getting help and support.</p>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">How do I reset my password?</h2>
          <p className="text-gray-500">You can reset your password by going to the settings page and clicking on the "Reset Password" button.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-brand-text">How do I contact support?</h2>
          <p className="text-gray-500">You can contact support by emailing us at support@architex-axis.com.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
