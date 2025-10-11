'use client';

import Link from 'next/link';
import { MagnifyingGlassIcon, UserCircleIcon, BookOpenIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Input } from '@/components/ui/input';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function NavbarMentor() {
  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/mentor/dashboard" className="flex items-center gap-2 transition-transform hover:scale-105">
            <BookOpenIcon className="h-8 w-8 text-[#005EB8]" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">MentorPanel</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Cari kursus saya..."
                className="w-full pl-10 pr-4 transition-all duration-300 focus:ring-2 focus:ring-[#005EB8] focus:border-[#005EB8]"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <UserCircleIcon className="h-8 w-8 text-[#005EB8]" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/mentor/profile" className="flex items-center gap-2 cursor-pointer">
                    <UserCircleIcon className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mentor/courses" className="flex items-center gap-2 cursor-pointer">
                    <BookOpenIcon className="h-4 w-4" />
                    <span>My Courses</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/mentor/settings" className="flex items-center gap-2 cursor-pointer">
                    <Cog6ToothIcon className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer text-red-600">
                  <ArrowRightOnRectangleIcon className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
