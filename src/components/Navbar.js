'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page (within hero section)
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 transition-transform duration-300 px-4 sm:px-6 py-4 sm:py-6 md:px-12 flex justify-between items-center ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        pathname === '/' ? 'bg-transparent' : 'bg-[#F5F5F0]/95 backdrop-blur-sm shadow-sm'
      }`}>
        <Link href="/" className="text-base sm:text-xl md:text-2xl font-serif font-bold tracking-tight text-sage-dark flex-shrink-0">
          Dr. Maya Reynolds, PsyD
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide font-sans text-sage-dark">
          <Link href="/blog" className={`hover:text-sage transition-colors ${pathname.startsWith('/blog') ? 'border-b-2 border-sage' : ''}`}>
            Blog
          </Link>
          <Link href="/contact" className={`hover:text-sage transition-colors ${pathname === '/contact' ? 'border-b-2 border-sage' : ''}`}>
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-sage-dark p-2 hover:bg-black/5 rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden bg-[#F5F5F0]/95 backdrop-blur-sm">
          <div className="flex flex-col gap-1 p-4">
            <Link 
              href="/blog" 
              className={`px-4 py-3 rounded transition-colors font-medium text-sage-dark hover:bg-black/5 ${pathname.startsWith('/blog') ? 'bg-sage/10 border-l-4 border-sage' : ''}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-3 rounded transition-colors font-medium text-sage-dark hover:bg-black/5 ${pathname === '/contact' ? 'bg-sage/10 border-l-4 border-sage' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
