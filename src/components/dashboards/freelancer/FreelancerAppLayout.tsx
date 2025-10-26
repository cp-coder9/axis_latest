import React from 'react';
import { Outlet } from 'react-router-dom';
import FreelancerAppSidebar from './app-sidebar';

const FreelancerAppLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <FreelancerAppSidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default FreelancerAppLayout;