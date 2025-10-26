const FreelancerProfilePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Profile</h1>
      <p className="text-gray-500 mb-8">This page is for the public-facing freelancer profile.</p>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-bold text-brand-text">Bob</h2>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold text-brand-text">About</h3>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold text-brand-text">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">React</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">TypeScript</span>
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfilePage;
