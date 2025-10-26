import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminAppSidebar from './app-sidebar';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const AdminAppLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <AdminAppSidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminAppLayout;