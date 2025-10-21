const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-2">Architex Axis</h1>
        <p className="text-center text-gray-500 mb-6">Management Suite</p>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Select Account Type</p>
          <div className="flex justify-between">
            <button className="px-4 py-2 text-sm rounded-md bg-gray-200">Admin</button>
            <button className="px-4 py-2 text-sm rounded-md bg-teal-600 text-white">Client</button>
            <button className="px-4 py-2 text-sm rounded-md bg-gray-200">Freelancer</button>
          </div>
          <p className="text-xs text-gray-400 mt-2">Project oversight and collaboration</p>
        </div>

        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 text-sm rounded-md bg-white border border-gray-300">Sign In</button>
          <button className="px-4 py-2 text-sm rounded-md bg-gray-200">Sign Up</button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
        </div>

        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Sign In</button>

        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
          <img src="https://www.google.com/favicon.ico" alt="Google icon" className="h-5 w-5 mr-2" />
          Sign in with Google
        </button>
        <p className="text-xs text-gray-400 mt-2">If popup is blocked, it will automatically redirect to Google</p>

        <p className="mt-6 text-center text-sm">
          Don't have an account? <a href="#" className="font-medium text-teal-600 hover:text-teal-500">Sign up here</a>
        </p>

        <p className="mt-2 text-center text-xs text-gray-400">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;