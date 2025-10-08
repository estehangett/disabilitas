'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, PlayCircleIcon, UserCircleIcon, Cog6ToothIcon, DocumentCheckIcon, BanknotesIcon } from '@heroicons/react/24/outline';

const menuItems = [
  {
    label: 'Dashboard',
    icon: HomeIcon,
    link: '/user/dashboard',
  },
  {
    label: 'Learn',
    icon: PlayCircleIcon,
    link: '/user/learn',
  },
  {
    label: 'Certificates',
    icon: DocumentCheckIcon,
    link: '/user/certificates',
  },
  {
    label: 'Profile',
    icon: UserCircleIcon,
    link: '/user/profile',
  },
  {
    label: 'Settings',
    icon: Cog6ToothIcon,
    link: '/user/settings',
  },
  {
    label: 'Transaction',
    icon: BanknotesIcon,
    link: '/user/transaction',
  },
];

export default function SidebarUser() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.link;

          return (
            <Link
              key={item.link}
              href={item.link}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-[#005EB8] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
