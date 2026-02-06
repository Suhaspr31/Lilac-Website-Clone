'use client'; 

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Plus, Minus, MapPin, Wifi } from 'lucide-react';

// --- ASSETS (Intentionally selected for Santa Monica/Grounded Vibe) ---
const IMAGES = {
  // Hero: Calming coastal/office vibe, representing "Safety" and "Santa Monica"
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", 
  
  // Section: High-achiever feeling "stuck" or "overwhelmed"
  burnout: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop",
  
  // Specialties
  anxiety: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", // Calm ocean/beach
  trauma: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop", // Peaceful morning light
  burnoutSpec: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop", // Focus/Balance
  
  // "You don't have to do this alone" - Supportive
  alone: "/alone.webp", 
  
  // Bio: Professional Psychologist Headshot
  bio: "/Dr. Maya Reynolds.png", 
  bioDetail: "/office2.jpeg", // Detail of textures/plant

  faq : "/faq.webp",

  office1: "/office1.jpeg",
  office2: "/office2.jpeg",
  
};

// --- REUSABLE COMPONENTS ---

const SectionHeading = ({ children, className = "" }) => (
  <h2 className={`text-3xl md:text-4xl font-serif text-sage-dark mb-6 tracking-tight font-bold ${className}`}>
    {children}
  </h2>
);

const ButtonLink = ({ text, dark = false }) => (
  <button className={`
    group inline-flex items-center text-xs tracking-[0.2em] uppercase font-sans font-bold mt-6 pb-2 border-b-2
    ${dark ? 'text-white border-white/50 hover:border-white' : 'text-sage-dark border-sage/30 hover:border-sage'}
    transition-all duration-300
  `}>
    {text} <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
  </button>
);

const OutlineButton = ({ text, onClick }) => (
  <button 
    onClick={onClick}
    className="border-2 border-sage text-sage-dark px-8 py-4 text-xs tracking-[0.2em] font-bold uppercase hover:bg-black hover:text-white transition-colors duration-300"
  >
    {text} &rarr;
  </button>
);

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-sage/20 last:border-0">
    <button 
      onClick={onClick}
      className="w-full flex justify-between items-center py-6 text-left group"
    >
      <span className="text-lg md:text-xl font-serif text-sage-dark group-hover:text-sage transition-colors font-medium">{title}</span>
      <span className="text-sage ml-4">
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </span>
    </button>
    <div 
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <p className="text-gray-600 font-sans leading-relaxed text-sm md:text-base max-w-2xl">{content}</p>
      </div>
    </div>
  </div>
);

// --- PAGE COMPONENT ---

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [openBackground, setOpenBackground] = useState(null);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const toggleBackground = (index) => setOpenBackground(openBackground === index ? null : index);

  return (
    <main className="min-h-screen text-[#2D3748] selection:bg-sage selection:text-white">
      
      {/* HERO SECTION - SEO Optimized H1 and location */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-32 px-6 md:px-12 mx-auto bg-[#E8E6E1]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Hero Image */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="relative w-full md:w-[401px] h-[400px] md:h-[660px] overflow-hidden shadow-sm z-10" 
                               style={{ borderRadius: '300px 300px 0 0' }}>
                             <Image 
                               src={IMAGES.hero}
                               alt="Main Arched Image" 
                               fill 
                               style={{ objectFit: 'cover' }}
                               priority
                             />
                           </div>
          </div>
          
          {/* Hero Text */}
          <div className="flex flex-col items-start md:pl-8 order-1 md:order-2">
            <span className="text-sage font-bold tracking-widest text-xs uppercase mb-4">
              Santa Monica, CA &bull; Telehealth
            </span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.2] mb-8 font-bold text-sage-dark">
              Therapy for the <br /> <span className="text-sage italic">high-achiever</span> who feels quietly overwhelmed.
            </h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-sans max-w-md">
              Find relief from anxiety, trauma, and professional burnout. A grounded, evidence-based approach to helping you reconnect with yourself.
            </p>
            <Link href="/contact">
              <OutlineButton text="Book a Consultation" onClick={() => {}} />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION - Based on Profile "About" */}
      <section className="py-20 md:py-32 px-6 md:px-12 mx-auto bg-white">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 md:pr-12">
            <SectionHeading>Functioning on the outside. <br/>Struggling on the inside.</SectionHeading>
            <p className="text-gray-600 leading-7 mb-6 text-[15px] font-sans">
              Many of the people I work with are successful, thoughtful, and self-aware—but internally, they feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>
            <p className="text-gray-600 leading-7 mb-10 text-[15px] font-sans">
              You might be navigating the lingering effects of past experiences or bracing for something to go wrong. I offer a space to slow down, process, and develop sustainable ways of living.
            </p>
            <Link href="/contact"><ButtonLink text="My Approach" /></Link>
          </div>
          <div className="md:col-span-7 w-full h-[400px] md:h-[500px] relative rounded-lg overflow-hidden shadow-sm">
             <Image 
               src={IMAGES.burnout} 
               alt="Woman feeling overwhelmed" 
               fill
               className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </section>

      {/* SPECIALTIES SECTION - Derived from Profile */}
      <section className="py-20 md:py-32 bg-[#E8E6E1]">
        <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 md:mb-24 text-sage-dark">
            Clinical Focus Areas
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Anxiety */}
            <div className="flex flex-col bg-sand p-8 md:p-12 text-center items-center hover:bg-[#F0EDE6] hover:shadow-lg transition-all duration-300 rounded-sm">
              <h3 className="text-xl font-serif font-bold mb-6 text-sage-dark">Anxiety & Panic</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-12 flex-grow font-sans">
                For those who feel functional but struggle with constant worry, body tension, or sleep issues. We work to regulate your nervous system.
              </p>
              <div className="w-48 h-48 rounded-full overflow-hidden mt-auto relative border-4 border-white">
                <Image src={IMAGES.anxiety} alt="Anxiety Therapy" fill className="object-cover" />
              </div>
            </div>

            {/* Service 2: Trauma */}
            <div className="flex flex-col bg-sand p-8 md:p-12 text-center items-center hover:bg-[#F0EDE6] hover:shadow-lg transition-all duration-300 rounded-sm">
              <h3 className="text-xl font-serif font-bold mb-6 text-sage-dark">Trauma & EMDR</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-12 flex-grow font-sans">
                Addressing complex, long-standing patterns from childhood or single-incident traumas. I use EMDR and somatic techniques for deep healing.
              </p>
              <div className="w-48 h-48 rounded-full overflow-hidden mt-auto relative border-4 border-white">
                <Image src={IMAGES.trauma} alt="Trauma Therapy" fill className="object-cover" />
              </div>
            </div>

            {/* Service 3: Burnout */}
            <div className="flex flex-col bg-sand p-8 md:p-12 text-center items-center hover:bg-[#F0EDE6] hover:shadow-lg transition-all duration-300 rounded-sm">
              <h3 className="text-xl font-serif font-bold mb-6 text-sage-dark">Burnout & Perfectionism</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-12 flex-grow font-sans">
                Supporting entrepreneurs and creatives who feel disconnected after years of pushing. Reconnect with yourself and find balance.
              </p>
              <div className="w-48 h-48 rounded-full overflow-hidden mt-auto relative border-4 border-white">
                <Image src={IMAGES.burnoutSpec} alt="Burnout Therapy" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS SECTION - Profile "Functioning on outside" */}
      <section className="grid md:grid-cols-2 min-h-[600px] bg-[#E6DFD3]">
        {/* Left: Image */}
        <div className="h-[400px] md:h-auto w-full relative">
          <Image 
            src={IMAGES.alone} 
            alt="Contemplative woman" 
            fill
            className="object-cover"
          />
        </div>
        
        {/* Right: Content with Sage Bg */}
        <div className="bg-sage p-12 md:p-24 flex flex-col justify-center text-sage-dark">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            Safety, stabilization, and regulation.
          </h2>
          
          <p className="mb-8 font-medium text-sm tracking-wide opacity-90 font-sans">
            MY PRACTICE SUPPORTS ADULTS NAVIGATING:
          </p>
          
          <ul className="space-y-4 mb-12 text-sage-dark list-disc pl-5 text-[15px] leading-relaxed font-sans">
            <li className="pl-2">High internal pressure and perfectionism</li>
            <li className="pl-2">Chronic stress and professional burnout</li>
            <li className="pl-2">Lingering effects of childhood experiences</li>
            <li className="pl-2">Feeling constantly &quo;braced&quo; for danger</li>
            <li className="pl-2">Disconnect from the body and emotions</li>
          </ul>
          
          <p className="mb-12 text-sage-dark leading-relaxed text-[15px] font-sans">
            My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
          </p>
          
          <div>
            <Link href="/contact">
            <ButtonLink text="Begin Therapy" />
            </Link>
            
          </div>
        </div>
      </section>

      {/* BIO SECTION - Tailored to Dr. Maya Reynolds */}
      <section className="py-20 md:py-40 px-6 md:px-10 mx-auto md:gap-40 bg-sage">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="order-2 md:order-1 gap-12">
            <span className="text-sage font-bold tracking-widest text-xs uppercase mb-2 block">
              About Me
            </span>
            <SectionHeading>Dr. Maya Reynolds, PsyD</SectionHeading>
            <p className="text-gray-600 leading-relaxed mb-6 text-[15px] font-sans">
              I am a licensed clinical psychologist based in Santa Monica. I take a warm, collaborative, and grounded approach to therapy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-[15px] font-sans">
              Sessions are structured enough to feel supportive, while leaving space for depth. I integrate evidence-based methods like CBT, Mindfulness, and body-oriented techniques to help you understand both the emotional and physiological sides of your experience.
            </p>
            <Link href="/contact">
              <OutlineButton text="Learn More" onClick={() => {}} />
            </Link>
          </div>
          
          {/* Image Composition */}
          
          <div className="order-3 md:order-4 relative flex justify-center md:justify-start shrink-0">
            {/* LOCKED IMAGE GROUP */}
            <div className="relative w-[280px] md:w-[441px] h-[420px] md:h-[660px] shrink-0">

              {/* Main arched image */}
              <div
                className="absolute inset-0 overflow-hidden shadow-sm z-10"
                style={{ borderRadius: '300px 300px 0 0' }}
              >
                <Image
                  src={IMAGES.bio}
                  alt="Main Arched Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Inset circle image (GLUED to main image) */}
              <div
                className="
                  absolute
                  bottom-[-50px] md:bottom-[-100px]
                  right-[-50px] md:right-[-160px]
                  w-[140px] md:w-[320px]
                  h-[140px] md:h-[320px]
                  rounded-full
                  overflow-hidden
                  shadow-xl
                  z-20
                "
              >
                <Image
                  src={IMAGES.bioDetail}
                  alt="Detail Inset"
                  fill
                  className="object-cover"
                />
              </div>

          {/* --- IMAGE COMPOSITION END --- */}
          </div>
        </div>
        </div>
      </section>

      {/* --- NEW CUSTOM SECTION: OUR OFFICE --- */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#E6DFD3]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-40 items-center">
            
            {/* Left: Text Content */}
            <div>
              <span className="text-sage font-bold tracking-widest text-xs uppercase mb-2 block">
                The Space
              </span>
              <SectionHeading>A Calm Space for Healing</SectionHeading>
              <p className="text-gray-600 leading-relaxed mb-6 text-[15px] font-sans">
                My office in Santa Monica is a quiet, private space designed to feel calm and grounding. With natural light and a comfortable, uncluttered environment, the space itself helps you feel more at ease when you arrive.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px] font-sans">
                I believe that feeling safe in your environment is the first step toward successful therapy. Whether you are coming in from a busy workday or seeking a moment of respite, this is a place where you can slow down and reconnect.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mt-8 border-t border-sage/10 pt-20">
                <div className="flex items-start gap-3">
                  <MapPin className="text-sage w-5 h-5 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-sage-dark text-sm">Location</h4>
                    <p className="text-xs text-gray-500 mt-1">123th Street 45 W<br/>Santa Monica, CA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wifi className="text-sage w-5 h-5 mt-1" />
                  <div>
                    <h4 className="font-serif font-bold text-sage-dark text-sm">Hybrid Sessions</h4>
                    <p className="text-xs text-gray-500 mt-1">In-person & Secure<br/>Telehealth Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative h-[300px] md:h-[400px] rounded-tl-[100px] overflow-hidden shadow-lg mt-12">
                 <Image 
                   src={IMAGES.office1} 
                   alt="Therapy Office Seating" 
                   fill 
                   className="object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-br-[100px] overflow-hidden shadow-lg mb-12">
                 <Image 
                   src={IMAGES.office2} 
                   alt="Office Natural Light" 
                   fill 
                   className="object-cover hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* --- END CUSTOM SECTION --- */} 

      {/* FAQ SECTION - Specific to Profile */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#F5F5F0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 relative order-2 md:order-1">
            <div className="relative w-full md:w-[401px] h-[350px] md:h-[560px] overflow-hidden shadow-sm z-10" 
                               style={{ borderRadius: '300px 300px 0 0' }}>
                             <Image 
                               src={IMAGES.faq}
                               alt="Main Arched Image" 
                               fill 
                               style={{ objectFit: 'cover' }}
                               priority
                             />
                           </div>
          </div>
          
          <div className="md:col-span-7 order-1 md:order-2 pl-0 md:pl-12">
            <SectionHeading className="mb-12">Common Questions</SectionHeading>
            <div className="space-y-2">
              <AccordionItem 
                title="What is your therapeutic approach?" 
                content="I integrate evidence-based methods including Cognitive-Behavioral Therapy (CBT), EMDR for trauma, and mindfulness-based practices. My style is warm, collaborative, and focused on safety."
                isOpen={openFaq === 0}
                onClick={() => toggleFaq(0)}
              />
              <AccordionItem 
                title="Do you offer telehealth?" 
                content="Yes, I offer secure telehealth sessions for clients located anywhere in California, as well as in-person sessions at my Santa Monica office."
                isOpen={openFaq === 1}
                onClick={() => toggleFaq(1)}
              />
              <AccordionItem 
                title="What are your fees?" 
                content="Please contact me directly for current rates. While I do not accept insurance directly, I can provide a superbill for you to submit to your insurance provider for potential out-of-network reimbursement."
                isOpen={openFaq === 2}
                onClick={() => toggleFaq(2)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS BACKGROUND */}
      <section className="pt-20 pb-0 md:pt-32 bg-sage">
        <div className="px-6 md:px-12 max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-serif text-sage-dark text-center mb-16">
            Professional Background
          </h2>
          <div className="border-t border-sage/20">
             <AccordionItem 
               title="Education" 
               content="Doctor of Psychology (PsyD) in Clinical Psychology."
               isOpen={openBackground === 0}
               onClick={() => toggleBackground(0)}
             />
             <AccordionItem 
               title="Licensure" 
               content="Licensed Clinical Psychologist - California Board of Psychology."
               isOpen={openBackground === 1}
               onClick={() => toggleBackground(1)}
             />
             <AccordionItem 
               title="Specialized Training" 
               content="Certified in EMDR (Eye Movement Desensitization and Reprocessing), Trauma-Informed Care, and Somatic Experiencing techniques."
               isOpen={openBackground === 2}
               onClick={() => toggleBackground(2)}
             />
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#E6DFD3] py-24 md:py-50 px-6 text-center text-sage-dark">
           <h2 className="text-4xl md:text-5xl font-serif mb-8">Reconnect with yourself.</h2>
           <p className="max-w-xl mx-auto mb-4 text-[15px] leading-relaxed font-sans">
             Therapy can be a space to slow down and develop more sustainable ways of living and working.
           </p>
           <p className="max-w-xl mx-auto mb-12 text-[15px] leading-relaxed font-sans">
             If you are looking for a therapist who understands the realities of a fast-paced environment, I may be a good fit.
           </p>
           
            <Link href="/contact">
              <OutlineButton text="Schedule a Consultation" onClick={() => {}} />
            </Link>
        </div>
      </section>
    </main>
  );
}
