'use client';

import React from 'react';
import GlobeDemo from '@/components/globe-demo';
import HoverBorderGradientDemo from '@/components/hover-border-gradient-demo';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden scroll-mt-20">
      {/* 3D Interactive Three.js Globe & Hero Presentation */}
      <GlobeDemo />

      {/* Upcoming Event Showcase ("DSS Unlocked") */}
      <motion.div
        id="whats-hot"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="-translate-y-40 md:-translate-y-10 relative z-20"
      >
        <HoverBorderGradientDemo />
      </motion.div>
    </section>
  );
}
