'use client';

import Image from 'next/image';

const ASSETS = {
  // Hero Images
  detailBio: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", 
  mainBio: "/office2.jpeg",
  
  // Social Grid Images
  social1: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=600&auto=format&fit=crop", 
  social2: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=600&auto=format&fit=crop", 
  social3: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600&auto=format&fit=crop",
  social4: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop",
  
  // Santa Monica Map
  map: "https://images.unsplash.com/photo-1623945202652-3252575e9834?q=80&w=1200&auto=format&fit=crop&sat=-100" 
};

export default function ContactPage() {
  return (
    <main className="min-h-screen text-[#2e3d25]">

      {/* 1. HERO / INTRO SECTION (Lavender Background) */}
      <section className="bg-[#dcdae5] pt-40 pb-40 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text + Arched Image */}
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-[#2e3d25] mb-8">
              Let&apos;s Connect
            </h1>
            
            <div className="mb-12 space-y-4 text-[#2e3d25] font-sans text-sm leading-relaxed">
              <p>Starting therapy is courageous. If you feel overwhelmed by anxiety or burnout, I am here to help.</p>
              <p>Get in touch for questions, or to book a free 15-minute consultation to see if we are a good fit.</p>
            </div>

            {/* Image Composition - Styled as per reference */}
            {/* The container width is set to match the inspection panel (approx 400px) */}
            <div className="relative mx-auto md:mx-0 mt-10 shrink-0">
  {/* LOCKED IMAGE GROUP */}
  <div className="relative w-[250px] h-[400px] shrink-0">

    {/* 1. MAIN ARCH IMAGE */}
    <div
      className="absolute inset-0 overflow-hidden shadow-sm z-10"
      style={{ borderRadius: '300px 300px 0 0' }}
    >
      <Image
        src={ASSETS.detailBio}
        alt="Main Arched Image"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* 2. INSET CIRCLE IMAGE — GLUED */}
    <div
      className="
        absolute
        bottom-[0px]
        right-[-100px]
        w-[160px]
        h-[160px]
        rounded-full
        overflow-hidden
        shadow-xl
        z-20"
    >
      <Image
        src={ASSETS.mainBio}
        alt="Detail Inset"
        fill
        className="object-cover"
      />
    </div>

  </div>
</div>

            {/* --- IMAGE COMPOSITION END --- */}

          </div>

          {/* Right Column: Dark Green Info Box */}
          <div className="bg-[#2e3d25] p-8 md:p-12 text-white font-sans text-xs leading-relaxed self-center mt-12 md:mt-0 shadow-lg">
            <p>
              <span className="font-bold block mb-2 text-sm uppercase tracking-widest">Consultation & Availability</span> 
              I offer a free 15-minute consultation to ensure we are the right match. My practice includes both in-person sessions at my Santa Monica office and secure telehealth for clients located anywhere in California.
            </p>
          </div>

        </div>
      </section>

      {/* 2. BOOKING SECTION (Beige Background) */}
      <section className="bg-[#efece6] py-32 px-6 pb-20 md:px-12 text-center border-t border-[#2e3d25]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2e3d25] mb-8">
            Book an appointment.
          </h2>
          <p className="text-[#2e3d25] font-sans text-sm md:text-base leading-relaxed mb-16 max-w-2xl mx-auto">
            Use the portal below to view my availability and request an appointment. Existing clients can also log in here to manage their schedule.
          </p>
          
          {/* Demo Clarity Text */}
          <p className="text-xs italic text-gray-500 mb-12">
            This is a demo site. Live scheduling and client portals are not enabled.
          </p>
          
          {/* Scheduler Widget Placeholder */}
          <div className="bg-white max-w-md mx-auto p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
             <h3 className="font-bold text-lg mb-2 text-[#2e3d25]">Client Portal</h3>
             <p className="text-xs text-gray-500 mb-6">Access your secure client area.</p>
             <button
               disabled
               className="bg-[#2e3d25] text-white px-8 py-3 text-[10px] tracking-widest font-bold uppercase opacity-50 cursor-not-allowed"
             >
               Go to Portal (Demo)
             </button>
          </div>
          <div className="mt-40 text-center text-xs italic text-gray-400">
            Scheduling integration shown for demonstration purposes only.
          </div>
        </div>
      </section>

      {/* 3. OFFICE & MAP SECTION (Olive Background) */}
      <section className="bg-[#828a65] grid md:grid-cols-2">
        {/* Left: Info */}
        <div className="p-16 md:p-24 flex flex-col justify-center text-white">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">My Office</h2>
            <div className="font-sans text-sm space-y-2 opacity-90">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="mt-4 italic pl-4 border-l-2 border-white/30">
                A quiet, private space designed to feel calm and grounding.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Hours</h2>
            <div className="font-sans text-sm space-y-1 opacity-90">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
              <p>By Appointment Only</p>
            </div>
          </div>
        </div>

        {/* Right: Map Embed */}
        <div className="relative min-h-[500px] w-full">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26453.364421586735!2d-118.51442187661555!3d34.02029514781745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d1ac085b31%3A0x8979201f3c3d3d0!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1709669041793!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            ></iframe>
        </div>
      </section>

      {/* 4. SOCIAL SECTION (White Background) */}
      <section className="bg-white py-32 px-6 md:px-12 border-t border-[#2e3d25]/10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2e3d25] mb-12">
            Find me on social.
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="aspect-square relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image src={ASSETS.social1} alt="Social 1" fill className="object-cover hover:opacity-90 transition-opacity" />
             </div>
             <div className="aspect-square relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image src={ASSETS.social2} alt="Social 2" fill className="object-cover hover:opacity-90 transition-opacity" />
             </div>
             <div className="aspect-square relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image src={ASSETS.social3} alt="Social 3" fill className="object-cover hover:opacity-90 transition-opacity" />
             </div>
             <div className="aspect-square relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image src={ASSETS.social4} alt="Social 4" fill className="object-cover hover:opacity-90 transition-opacity" />
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}
