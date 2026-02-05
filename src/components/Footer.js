'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Show footer when user is within 100px of the bottom
      if (scrollTop >= docHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`text-[#2e3d25] font-sans transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Top Section - Light Background */}
      <div className="bg-[#fcfaf6] py-35 px-57 md:px-45">
        <div className=" mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-serif mb-8">Dr. Maya Reynolds, PsyD</h2>
            <div className="space-y-2 text-sm md:text-base font-light">
              <p>123th Street 45 W</p>
              <p className="mb-6">Santa Monica, CA 90401</p>
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:opacity-70">contact@drmayareynolds.com</p>
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:opacity-70">(555) 123-4567</p>
            </div>
          </div>
          
          {/* Right: Hours & Links */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-40 md:justify-end">
            <div>
              <h2 className="text-4xl font-serif mb-6">Hours</h2>
              <div className="text-sm md:text-base space-y-2 font-light">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif mb-6">Find</h2>
              <ul className="text-sm md:text-base space-y-2 text-left md:text-right underline decoration-1 underline-offset-4 font-light">
                <li><Link href="/" className="hover:opacity-70">Home</Link></li>
                <li><Link href="/contact" className="hover:opacity-70">Contact</Link></li>
                <li><Link href="/blog" className="hover:opacity-70">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar - Beige Background */}
      <div className="bg-[#efece6] py-15 px-15 md:px-50 border-t border-[#2e3d25]/10">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-6 text-[10px] md:text-[12px] uppercase tracking-widest text-center font-medium">
            {/* First Row - Policy Links */}
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="/privacy" className="hover:underline">Privacy & Cookies Policy</Link>
              <Link href="/good-faith-estimate" className="hover:underline">Good Faith Estimate</Link>
              <Link href="/terms" className="hover:underline">Website Terms & Conditions</Link>
              <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
            </div>
            {/* Second Row - Template Credits */}
            <div>
              Website Template Credits : <a href="https://gobloomcreative.com" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:opacity-70">Go Bloom Creative</a>
            </div>
            {/* Third Row - Copyright */}
            <div className="text-[10px] opacity-60 uppercase tracking-widest">
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </div>
        </div>
      </div>
    </footer>
  );
}