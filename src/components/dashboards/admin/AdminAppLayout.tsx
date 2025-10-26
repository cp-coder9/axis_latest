import React from 'react';
import AdminAppSidebar from './app-sidebar';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';

const AdminAppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AdminAppSidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
        {children}
      </main>
    </div>
  );
};

export default AdminAppLayout;