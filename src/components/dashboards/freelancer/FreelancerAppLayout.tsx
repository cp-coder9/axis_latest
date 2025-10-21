import React from 'react';
import FreelancerAppSidebar from './app-sidebar';

const FreelancerAppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <FreelancerAppSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default FreelancerAppLayout;