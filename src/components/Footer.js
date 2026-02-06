'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Fade in when footer enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.50, // Trigger when 5% of footer is visible
        rootMargin: '50px', // Start triggering 50px before footer enters viewport
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className={`text-[#2e3d25] font-sans transition-opacity duration-700 will-change-opacity ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Top Section - Light Background */}
      <div className="bg-[#fcfaf6] py-12 sm:py-20 md:py-35 px-4 sm:px-6 md:px-12 lg:px-57">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-6 md:mb-8">Dr. Maya Reynolds, PsyD</h2>
            <div className="space-y-2 text-xs sm:text-sm md:text-base font-light">
              <p>123th Street 45 W</p>
              <p className="mb-4 md:mb-6">Santa Monica, CA 90401</p>
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:opacity-70">contact@drmayareynolds.com</p>
              <p className="underline decoration-1 underline-offset-4 cursor-pointer hover:opacity-70">(555) 123-4567</p>
            </div>
          </div>
          
          {/* Right: Hours & Links */}
          <div className="flex flex-col gap-8 md:gap-40 md:justify-end md:flex-row">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 md:mb-6">Hours</h2>
              <div className="text-xs sm:text-sm md:text-base space-y-2 font-light">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 md:mb-6">Find</h2>
              <ul className="text-xs sm:text-sm md:text-base space-y-2 text-left md:text-right underline decoration-1 underline-offset-4 font-light">
                <li><Link href="/" className="hover:opacity-70">Home</Link></li>
                <li><Link href="/contact" className="hover:opacity-70">Contact</Link></li>
                <li><Link href="/blog" className="hover:opacity-70">Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar - Beige Background */}
      <div className="bg-[#efece6] py-8 sm:py-12 md:py-15 px-4 sm:px-6 md:px-12 lg:px-50 border-t border-[#2e3d25]/10">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-4 md:gap-6 text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-widest text-center font-medium">
            {/* First Row - Policy Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
              <Link href="/privacy" className="hover:underline">Privacy & Cookies</Link>
              <Link href="/good-faith-estimate" className="hover:underline">Good Faith Estimate</Link>
              <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
              <Link href="/disclaimer" className="hover:underline">Disclaimer</Link>
            </div>
            {/* Second Row - Template Credits */}
            <div className="text-[8px] sm:text-[10px]">
              Website Template Credits : <a href="https://gobloomcreative.com" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:opacity-70">Go Bloom Creative</a>
            </div>
            {/* Third Row - Copyright */}
            <div className="text-[8px] sm:text-[10px] opacity-60 uppercase tracking-widest">
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </div>
        </div>
      </div>
    </footer>
  );
}