'use client';

import React from 'react';
import CompareDemo from '@/components/compare-demo';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-black scroll-mt-20 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-suse-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">
              About The Society
            </span>
          </div>
        </motion.div>

        {/* Animated Headline with Flip Words */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-4 my-4 flex flex-row items-center justify-center gap-4 text-center sm:mx-0 sm:mb-8"
        >
          <LayoutTextFlip
            text="What we "
            words={["are", "do", "stand for", "believe in"]}
          />
        </motion.div>

        {/* Two-Column Content: Mission Statement & Compare Slider */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
            <h3 className="font-poppins text-2xl md:text-3xl font-bold text-white leading-tight">
              Transforming raw curiosity into <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">real-world intelligence</span>.
            </h3>
            <p className="text-left text-base md:text-lg text-neutral-400 font-poppins leading-relaxed">
              Our mission at the BU Data Science Society is to foster learning, drive innovation, and promote ethical data practices. We cultivate a dynamic community that collaboratively explores and analyzes data to solve real-world problems. Through continuous growth and outreach, we aim to transform data into insights for a better future.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <p className="font-poppins text-2xl md:text-3xl font-bold text-white">500+</p>
                <p className="font-suse-mono text-xs uppercase tracking-wider text-neutral-500">Active Members</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="font-poppins text-2xl md:text-3xl font-bold text-white">15+</p>
                <p className="font-suse-mono text-xs uppercase tracking-wider text-neutral-500">Flagship Events</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <p className="font-poppins text-2xl md:text-3xl font-bold text-white">100%</p>
                <p className="font-suse-mono text-xs uppercase tracking-wider text-neutral-500">Student Led</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <CompareDemo />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
