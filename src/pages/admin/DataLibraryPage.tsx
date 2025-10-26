const DataLibraryPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Data Library</h1>
      <p className="text-gray-500 mb-8">This page is for managing the data library.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <div className="text-4xl mb-2">📄</div>
          <h2 className="text-xl font-bold text-brand-text">Document.docx</h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <div className="text-4xl mb-2">📊</div>
          <h2 className="text-xl font-bold text-brand-text">Report.pdf</h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <div className="text-4xl mb-2">🖼️</div>
          <h2 className="text-xl font-bold text-brand-text">Image.png</h2>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <div className="text-4xl mb-2">📁</div>
          <h2 className="text-xl font-bold text-brand-text">Archive.zip</h2>
        </div>
      </div>
    </div>
  );
};

export default DataLibraryPage;
