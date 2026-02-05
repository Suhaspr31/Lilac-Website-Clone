'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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

  return (
    <nav className={`fixed w-full top-0 z-50 transition-transform duration-300 px-6 py-6 md:px-12 flex justify-between items-center ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      pathname === '/' ? 'bg-transparent' : 'bg-[#F5F5F0]/95 backdrop-blur-sm shadow-sm'
    }`}>
      <Link href="/" className="text-xl md:text-2xl font-serif font-bold tracking-tight text-sage-dark">
        Dr. Maya Reynolds, PsyD
      </Link>
      <div className="flex gap-8 text-sm font-medium tracking-wide font-sans text-sage-dark">
        <Link href="/blog" className={`hover:text-sage transition-colors ${pathname.startsWith('/blog') ? 'border-b-2 border-sage' : ''}`}>
          Blog
        </Link>
        <Link href="/contact" className={`hover:text-sage transition-colors ${pathname === '/contact' ? 'border-b-2 border-sage' : ''}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
