import React from 'react';
import AdminAppSidebar from './app-sidebar';

const AdminAppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <AdminAppSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default AdminAppLayout;