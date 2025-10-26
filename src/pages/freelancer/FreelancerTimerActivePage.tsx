const FreelancerTimerActivePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Active Timer</h1>
      <p className="text-gray-500 mb-8">This page is for the active time tracking.</p>
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-5xl font-bold text-brand-text">01:23:45</h2>
        <div className="mt-4">
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Stop</button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerTimerActivePage;
