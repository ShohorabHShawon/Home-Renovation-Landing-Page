'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'testimonials', 'contact'];

    // Use IntersectionObserver for more reliable section detection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const navItems = [
    { href: '#hero', label: 'Hero' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="shadow-md fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Rest of the code remains the same */}
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-gray-800">
              Renovation
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium relative
                                ${
                                  activeSection === item.href.substring(1)
                                    ? 'text-blue-600'
                                    : ''
                                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.href);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.href.substring(1));
                  }
                }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'scale-x-100'
                      : 'scale-x-0'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button code remains the same */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu code with similar updates */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 w-full bg-white shadow-lg z-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-semibold relative
                                    ${
                                      activeSection === item.href.substring(1)
                                        ? 'text-blue-600'
                                        : ''
                                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector(item.href);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(item.href.substring(1));
                      closeMenu();
                    }
                  }}
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
};

export default Navbar;
