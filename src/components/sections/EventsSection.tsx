'use client';

import React from 'react';
import TimelineDemo from '@/components/timeline-demo';
import { motion } from 'framer-motion';

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative w-full overflow-hidden bg-black text-white scroll-mt-20 py-12 md:py-20"
    >
      {/* Background Grid Accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-suse-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 md:text-xs">
              03 / Our Journey
            </span>
          </div>
          <span className="font-suse-mono text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
            Flagship Hackathons & Workshops
          </span>
        </div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8 }}
        >
          <TimelineDemo />
        </motion.div>
      </div>
    </section>
  );
}
