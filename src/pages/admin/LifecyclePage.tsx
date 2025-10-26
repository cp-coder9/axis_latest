const LifecyclePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Lifecycle Management</h1>
      <p className="text-gray-500 mb-8">This page is for managing the project lifecycle stages.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-brand-text">Planning</h2>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-brand-text">In Progress</h2>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-brand-text">Review</h2>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-brand-text">Completed</h2>
        </div>
      </div>
    </div>
  );
};

export default LifecyclePage;
