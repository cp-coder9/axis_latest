const WordAssistantPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Word Assistant</h1>
      <p className="text-gray-500 mb-8">This page is for the Word Assistant.</p>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <textarea className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-brand-primary focus:border-brand-primary" placeholder="Start writing..."></textarea>
      </div>
    </div>
  );
};

export default WordAssistantPage;
