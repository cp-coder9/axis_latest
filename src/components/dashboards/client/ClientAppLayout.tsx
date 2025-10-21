import React from 'react';
import ClientAppSidebar from './app-sidebar';

const ClientAppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <ClientAppSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default ClientAppLayout;