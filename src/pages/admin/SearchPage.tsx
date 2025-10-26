const SearchPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Search</h1>
      <p className="text-gray-500 mb-8">This page is for searching the application.</p>
      <div className="flex">
        <input type="text" placeholder="Search..." className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-brand-primary focus:border-brand-primary" />
        <button className="px-4 py-2 bg-brand-primary text-white rounded-r-md">Search</button>
      </div>
    </div>
  );
};

export default SearchPage;
