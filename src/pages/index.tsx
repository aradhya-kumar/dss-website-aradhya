'use client';

import React, { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BoardSection from '@/components/sections/BoardSection';
import EventsSection from '@/components/sections/EventsSection';
import JoinSection from '@/components/sections/JoinSection';
import FooterSection from '@/components/sections/FooterSection';
import { scrollToSection } from '@/lib/use-active-section';

export default function Home() {
  useEffect(() => {
    // If the URL has an anchor hash (e.g. /#board or /#events), scroll smoothly to it
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        scrollToSection(hashId, 80);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 1. Home / Hero Section */}
      <HeroSection />

      {/* 2. About DSS */}
      <AboutSection />

      {/* 3. Board Members */}
      <BoardSection />

      {/* 4. Events Timeline */}
      <EventsSection />

      {/* 5. Join Community & Waitlist */}
      <JoinSection />

      {/* 6. Footer Section */}
      <FooterSection />
    </div>
  );
}
