import React from 'react';
import FreelancerAppSidebar from './app-sidebar';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const FreelancerAppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <FreelancerAppSidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
        {children}
      </main>
    </div>
  );
};

export default FreelancerAppLayout;
