import React from 'react';
import { Outlet } from 'react-router-dom';
import ClientAppSidebar from './app-sidebar';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const ClientAppLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <ClientAppSidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default ClientAppLayout;
