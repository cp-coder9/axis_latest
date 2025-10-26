import React from 'react';
import ClientAppSidebar from './app-sidebar';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const ClientAppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <ClientAppSidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
        {children}
      </main>
    </div>
  );
};

export default ClientAppLayout;
