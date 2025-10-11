'use client';

import NavbarMentor from './NavbarMentor';
import SidebarMentor from './SidebarMentor';

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavbarMentor />
      <SidebarMentor />
      <main className="ml-64 mt-16 p-8">
        {children}
      </main>
    </div>
  );
}
