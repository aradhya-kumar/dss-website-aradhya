'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  IconBrandWhatsapp,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function JoinSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    let processedEmail = email.trim().toLowerCase();
    if (processedEmail.endsWith('.')) {
      processedEmail = processedEmail.slice(0, -1);
    }

    if (!processedEmail.endsWith('@bennett.edu.in')) {
      setError('Only Bennett University emails (@bennett.edu.in) are eligible for core recruitment.');
      setTimeout(() => setError(''), 4000);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: processedEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'An error occurred while signing up.');
        setTimeout(() => setError(''), 4000);
      } else {
        setSuccessMessage(data.message || "You've been successfully added to the core recruitment waitlist!");
        setTimeout(() => setSuccessMessage(''), 5000);
        setEmail('');
      }
    } catch {
      setError('Network error. Please try again later.');
      setTimeout(() => setError(''), 4000);
    } finally {
      setIsLoading(false);
    }
  };

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

        {/* Dual Cards: WhatsApp Community & Core Team Waitlist */}
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
                href="https://chat.whatsapp.com/IsCjZeJi5lS6hP95reUnqu?mode=gi_t"
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

          {/* Card 2: Core Members Waitlist */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-white/25 transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-suse-mono uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Recruitment 2026-27
              </div>

              <h3 className="font-poppins text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                Core Team <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Priority Waitlist.
                </span>
              </h3>

              <p className="font-poppins text-sm md:text-base text-neutral-400 leading-relaxed mb-6">
                Looking to build high-impact projects, manage massive university events, or lead AI research? Drop your BU email to get notified the second applications open.
              </p>
            </div>

            <div className="relative z-10 pt-2">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="enrollment@bennett.edu.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={50}
                    required
                    className="w-full px-4 py-3.5 rounded-2xl bg-neutral-950/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-poppins"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !email.trim()}
                    className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-poppins font-bold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-lg hover:shadow-blue-500/20"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Join Waitlist</span>
                    )}
                  </button>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-xs mt-1"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-xs mt-1"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>{successMessage}</span>
                  </motion.div>
                )}
              </form>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-neutral-500 text-xs font-suse-mono">
                <span>Exclusive to Bennett University students</span>
                <span>Verified @bennett.edu.in</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
