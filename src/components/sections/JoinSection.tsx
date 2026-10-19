'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import {
  IconBrandWhatsapp,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function JoinSection() {
  return (
    <section
      id="join"
      className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white scroll-mt-20 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 65%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-suse-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400 md:text-xs">
              04 / Get Involved
            </span>
          </div>
          <span className="font-suse-mono text-[10px] tracking-[0.25em] text-neutral-500 md:text-xs">
            Community & Opportunities
          </span>
        </div>

        {/* Dual Cards: WhatsApp Community & Instagram Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: WhatsApp Community */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-white/25 transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-suse-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live Community
              </div>

              <h3 className="font-poppins text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Join the DSS <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  WhatsApp Hub.
                </span>
              </h3>

              <p className="font-poppins text-sm md:text-base text-neutral-400 leading-relaxed mb-6">
                Be the first to hear about upcoming hackathons, AI & ML bootcamps, speaker sessions with industry leaders, and research collabs. No spam, pure knowledge.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href="https://chat.whatsapp.com/Ebo9Z95cFwR3gltM2LwX2u?s=cl&p=i&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white text-black font-poppins font-bold text-sm sm:text-base hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <IconBrandWhatsapp className="w-5 h-5 text-emerald-600" />
                <span>Join Official WhatsApp Group</span>
                <ArrowUpRight className="w-4 h-4 ml-auto" />
              </a>

              {/* Social Channels */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-neutral-400">
                <span className="font-suse-mono text-xs uppercase tracking-wider text-neutral-500">
                  Follow DSS BU:
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/dss-bu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="DSS GitHub"
                  >
                    <IconBrandGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/dss_bu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="DSS Instagram"
                  >
                    <IconBrandInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dss-bu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label="DSS LinkedIn"
                  >
                    <IconBrandLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: DSS Instagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-white/25 transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-suse-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                FOLLOW DSS
              </div>

              <h3 className="font-poppins text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Stay Connected with <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  DSS.
                </span>
              </h3>

              <p className="font-poppins text-sm md:text-base text-neutral-400 leading-relaxed mb-6">
                Follow @dss_bu on Instagram for the latest updates on upcoming events, hackathons, workshops, recruitment announcements, and exciting opportunities at the Data Science Society, Bennett University.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href="https://www.instagram.com/dss_bu?exln=MWVtNGloMWEyNXp5MQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-white text-black font-poppins font-bold text-sm sm:text-base hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-white/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <IconBrandInstagram className="w-5 h-5 text-purple-600" />
                <span>Follow Us on Instagram</span>
                <ArrowUpRight className="w-4 h-4 ml-auto" />
              </a>

              {/* Instagram Handle Info Bar */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-neutral-400">
                <span className="font-suse-mono text-xs uppercase tracking-wider text-neutral-500">
                  Instagram Handle:
                </span>
                <a
                  href="https://www.instagram.com/dss_bu?exln=MWVtNGloMWEyNXp5MQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-suse-mono text-xs font-semibold text-white hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <IconBrandInstagram className="w-4 h-4 text-purple-400" />
                  <span>@dss_bu</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
