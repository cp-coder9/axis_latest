import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <img
            src="/logo.svg"
            alt="Architex Axis Logo"
            className="w-12 h-12 mx-auto mb-2"
          />
          <h1 className="text-3xl font-bold text-brand-text">Architex Axis</h1>
          <p className="text-gray-500">Management Suite</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">Select Account Type</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button className="px-4 py-2 text-sm rounded-md bg-gray-200">Admin</button>
            <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Client</button>
            <button className="px-4 py-2 text-sm rounded-md bg-gray-200">Freelancer</button>
          </div>
          <p className="mt-2 text-xs text-center text-gray-400">
            Project oversight and collaboration
          </p>
        </div>

        <div className="flex justify-between rounded-lg bg-gray-200 p-1">
          <button className="w-full py-2 text-sm rounded-md bg-white shadow">Sign In</button>
          <button className="w-full py-2 text-sm">Sign Up</button>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm"
            />
          </div>
        </div>

        <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">Sign In</button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 text-gray-500 bg-white">
              Or continue with
            </span>
          </div>
        </div>

        <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center">
          <img src="https://www.google.com/favicon.ico" alt="Google icon" className="h-5 w-5 mr-2" />
          Sign in with Google
        </button>
        <p className="text-xs text-center text-gray-400">
          If popup is blocked, it will automatically redirect to Google
        </p>

        <p className="text-sm text-center">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-brand-primary">
            Sign up here
          </a>
        </p>

        <p className="text-xs text-center text-gray-400">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
