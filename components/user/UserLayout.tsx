'use client';

import NavbarUser from './NavbarUser';
import SidebarUser from './SidebarUser';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavbarUser />
      <SidebarUser />
      <main className="ml-64 mt-16 p-8">
        {children}
      </main>
    </div>
  );
}
