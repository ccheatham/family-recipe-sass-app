'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/recipes', label: 'Recipes' },
    { href: '/recipes/create', label: 'Share Recipe' },
    { href: '/auth', label: 'Sign In' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[var(--bg-primary)] shadow-md border-b border-[var(--border-secondary)]" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="transition-transform duration-200 group-hover:scale-110">
              <Image
                src="/logo.svg"
                alt="Family Recipes Logo"
                width={48}
                height={48}
                priority
              />
            </div>
            <span className="font-bold text-2xl text-[var(--text-primary)] group-hover:text-orange-600 transition-colors duration-200">
              Family Recipes
            </span>
          </Link>

          {/* Navigation Links and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-orange-500 text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-accent-orange)] hover:text-orange-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-[var(--border-secondary)]">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-[var(--text-secondary)] hover:text-orange-500 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-[var(--border-secondary)] animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-orange-500 text-white'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-accent-orange)] hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
