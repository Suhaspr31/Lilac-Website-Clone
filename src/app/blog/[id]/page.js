'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

// Blog Content based on Dr. Maya Reynolds' Bio
const POST_CONTENT = (
  <>
    <p className="mb-6">
      Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. You might feel “functional” on the outside while quietly struggling with constant worry, tension in your body, or difficulty sleeping.
    </p>
    <p className="mb-6">
      It is common to feel a sense that you are always bracing for something to go wrong. Whether you are dealing with professional burnout, perfectionism, or high internal pressure, these feelings often stem from a disconnect with yourself after years of pushing through stress.
    </p>
    <h3 className="text-3xl font-serif mb-4 mt-8">A Space to Slow Down</h3>
    <p className="mb-6">
      Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working. My approach is warm, collaborative, and grounded. I integrate evidence-based methods such as Cognitive-Behavioral Therapy (CBT), EMDR, and mindfulness-based practices to help you understand both the emotional and physiological sides of what you’re experiencing.
    </p>
    <p className="mb-6">
      My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time. If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
    </p>
  </>
);

// Updated Blog Titles tailored to Dr. Reynolds' specialties
const POSTS_DATA = [
  { id: 1, title: "Navigating High-Functioning Anxiety", date: "MAR 11" },
  { id: 2, title: "Healing from Professional Burnout", date: "MAR 11" },
  { id: 3, title: "Understanding Trauma & EMDR", date: "MAR 11" },
  { id: 4, title: "Reconnecting With Yourself", date: "MAR 11" },
];

export default function BlogPost() {
  const params = useParams();
  const id = parseInt(params?.id || '1');
  
  const post = POSTS_DATA.find(p => p.id === id) || POSTS_DATA[0];
  
  // Navigation Logic
  const prevPost = POSTS_DATA.find(p => p.id === id - 1);
  const nextPost = POSTS_DATA.find(p => p.id === id + 1);

  return (
    // Changed bg-[#efece6] (Beige) to bg-[#dcdae5] (Lavender/Blue Cool Tone)
    <article className="min-h-screen pt-40 pb-32 bg-[#dcdae5] text-[#2e3d25]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Post Header: Date and Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-sans font-bold tracking-[0.05em] uppercase mb-6 block">
            {post.date}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-12">
            {post.title}
          </h1>
        </div>

        {/* Post Content: Centered, readable width */}
        <div className="max-w-[700px] mx-auto font-sans text-base leading-[1.8] mb-32">
          {POST_CONTENT}
        </div>

        {/* Bottom Navigation Links */}
        <div className="flex justify-between items-end pt-12 border-t border-[#2e3d25]/10">
          
          {/* Previous Link (Left) */}
          <div className="w-1/2 text-left">
            {prevPost && (
              <Link href={`/blog/${prevPost.id}`} className="group block">
                 <span className="flex items-center text-2xl md:text-4xl font-serif group-hover:opacity-70 transition-opacity">
                   <span className="mr-3 text-lg relative top-[1px]">‹</span> {prevPost.title}
                 </span>
              </Link>
            )}
          </div>

          {/* Next Link (Right) */}
          <div className="w-1/2 text-right">
             {nextPost && (
              <Link href={`/blog/${nextPost.id}`} className="group block">
                 <span className="flex items-center justify-end text-2xl md:text-4xl font-serif group-hover:opacity-70 transition-opacity">
                   {nextPost.title} <span className="ml-3 text-lg relative top-[1px]">›</span>
                 </span>
              </Link>
            )}
          </div>

        </div>
      </div>
    </article>
  );
}