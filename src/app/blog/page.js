'use client';

import Link from 'next/link';
import Image from 'next/image';

// Use local images from public folder
const BLOG_IMAGES = {
  header: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop", // Reading book/legs vibe
  post1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", // Calm waves (Anxiety)
  post2: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", // Focus/Balance (Burnout)
  post3: "/alone.webp", // Healing/Light (Trauma)
  post4: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Connection (Self)
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "Navigating High-Functioning Anxiety",
    date: "MAR 11",
    image: BLOG_IMAGES.post1
  },
  {
    id: 2,
    title: "Healing from Professional Burnout",
    date: "MAR 11",
    image: BLOG_IMAGES.post2
  },
  {
    id: 3,
    title: "Understanding Trauma & EMDR",
    date: "MAR 11",
    image: BLOG_IMAGES.post3
  },
  {
    id: 4,
    title: "Reconnecting With Yourself",
    date: "MAR 11",
    image: BLOG_IMAGES.post4
  }
];

export default function BlogListing() {
  return (
    <main className="min-h-screen pt-16 sm:pt-20 md:pt-32 bg-[#F5F5F0] text-[#2D3748]">
      
      {/* 1. ARCH HEADER SECTION */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto mb-8 sm:mb-12 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-24 items-center">
          {/* Left: Arched Image - Responsive */}
          <div className="relative flex justify-center md:justify-start order-2 md:order-1 w-full">
             <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[3/4.4] overflow-hidden shadow-sm z-10" 
                   style={{ borderRadius: '300px 300px 0 0' }}>
                 <Image 
                   src={BLOG_IMAGES.header}
                   alt="Main Arched Image" 
                   fill 
                   style={{ objectFit: 'cover' }}
                   priority
                 />
               </div>
          </div>
          
          {/* Right: Text Content */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <h1 className="text-xl sm:text-2xl md:text-7xl font-serif text-[#354A2E] mb-4 md:mb-8 font-bold">
              The Practice Blog
            </h1>
            <p className="text-gray-600 font-sans text-xs sm:text-sm md:text-xl leading-relaxed max-w-md mb-4 md:mb-8">
              Thoughts on anxiety, resilience, and finding balance in a fast-paced world.
            </p>
            <p className="text-[#354A2E] font-sans font-bold text-xs sm:text-xs md:text-base tracking-wide">
              Welcome to the space.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BLOG POST GRID (2 Columns) */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto mb-8 sm:mb-12 md:mb-32 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-x-12 md:gap-y-20">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group flex flex-col">
              {/* Image */}
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-white mb-3 sm:mb-4 md:mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <Link href={`/blog/${post.id}`}>
                    <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                </Link>
              </div>
              
              {/* Content */}
              <div className="flex flex-col items-start">
                <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.05em] uppercase text-[#4A6741] mb-2 md:mb-3 block">
                  {post.date}
                </span>
                
                <h2 className="text-sm sm:text-lg md:text-4xl font-serif text-[#354A2E] mb-2 sm:mb-3 md:mb-6 leading-tight group-hover:text-[#4A6741] transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <Link href={`/blog/${post.id}`}>
                  <button className="inline-flex items-center text-[8px] sm:text-[10px] tracking-[0.1em] uppercase font-sans font-bold pb-0.5 border-b-2 border-[#4A6741] text-[#4A6741] hover:text-[#354A2E] hover:border-[#354A2E] transition-all">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SUBSCRIBE SECTION (Olive/Sage Background) */}
      <section className="bg-[#4A6741] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto border border-white/50 p-4 sm:p-6 md:p-24 text-center">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-serif text-white mb-3 sm:mb-4 md:mb-6">Subscribe</h2>
            <p className="text-white font-sans text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-10 opacity-90">
                Sign up with your email address to receive updates on new posts and practice news.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="flex-grow bg-[#F5F5F0] px-3 sm:px-4 py-2 md:py-3 text-xs sm:text-sm font-sans placeholder:text-gray-400 focus:outline-none text-[#2D3748]"
                />
                <button 
                    type="button"
                    className="border-2 border-white text-white px-3 sm:px-6 py-2 md:py-3 text-[8px] sm:text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-[#4A6741] transition-colors whitespace-nowrap"
                >
                    Sign Up
                </button>
            </form>
            <p className="text-white/70 text-[8px] sm:text-[10px] mt-3 sm:mt-4 md:mt-6 font-sans">
                We respect your privacy.
            </p>
        </div>
      </section>

    </main>
  );
}
