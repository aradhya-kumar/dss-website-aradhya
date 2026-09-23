'use client';

import React from 'react';
import Image from 'next/image';
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconArrowUp,
} from '@tabler/icons-react';
import { scrollToSection } from '@/lib/use-active-section';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (window.history.pushState) {
      window.history.pushState(null, '', '#home');
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Board', id: 'board' },
    { name: 'Events', id: 'events' },
    { name: 'Join Community', id: 'join' },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-neutral-950 text-neutral-400 py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Row: Logos & Quick Links & Back to Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Column 1: Organization Logos */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src="/dssWHITE_.png"
                alt="Data Science Society Logo"
                width={86}
                height={64}
                style={{ width: 'auto' }}
              />
              <Image
                src="/cabinet-logo-white.png"
                alt="Student Cabinet Logo"
                width={180}
                height={52}
                className="p-1 rounded object-contain"
              />
            </div>
            <div>
              <Image
                src="/NAAC-Logo-2025.png"
                alt="Bennett University Logo"
                width={240}
                height={54}
                className="p-1 rounded object-contain"
              />
            </div>
            <p className="font-poppins text-xs text-neutral-500 max-w-sm mt-2">
              Official Data Science & Artificial Intelligence Society of Bennett University, Greater Noida.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id, 80)}
                  className="text-left text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Connect with Us & Back to Top */}
          <div className="flex flex-col space-y-4 md:items-end">
            <div className="flex flex-col md:items-end space-y-2">
              <h4 className="font-poppins font-bold text-sm uppercase tracking-wider text-white">
                Connect with Us
              </h4>
              <a
                href="mailto:datascienceclub@bennett.edu.in"
                className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <IconMail size={18} />
                <span>datascienceclub@bennett.edu.in</span>
              </a>
              <a
                href="https://www.instagram.com/dss_bu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <IconBrandInstagram size={18} />
                <span>@dss_bu</span>
              </a>
              <a
                href="https://www.linkedin.com/company/dss-bu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <IconBrandLinkedin size={18} />
                <span>@dss-bu</span>
              </a>
              <a
                href="https://github.com/dss-bu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <IconBrandGithub size={18} />
                <span>dss-bu</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-poppins transition-all cursor-pointer mt-4"
              aria-label="Back to top"
            >
              <IconArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright & Creator Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-poppins gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Data Science Society, Bennett University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
