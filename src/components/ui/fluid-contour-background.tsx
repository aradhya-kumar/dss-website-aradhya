'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FluidContourBackground() {
  return (
    <div
      className='absolute inset-0 overflow-hidden pointer-events-none z-0'
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      {/* ── AMBIENT SOFT RADIAL SHIMMER ── */}
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute inset-0 bg-radial from-white/[0.04] via-transparent to-transparent'
      />

      {/* ── LAYER 1: TOP-RIGHT ORGANIC FLUID BLOB (Animated & Smooth) ── */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -35, 30, 0],
          rotate: [0, 8, -6, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute -top-12 -right-12 w-[650px] sm:w-[900px] lg:w-[1150px] h-[600px] sm:h-[850px] lg:h-[1050px]'
      >
        <svg
          viewBox='0 0 1000 900'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full'
        >
          {/* Smooth organic shape with zero straight or clipped edges */}
          <path
            d='M500 120 C 720 80, 920 160, 950 360 C 980 560, 860 680 720 740 C 580 800, 460 660 340 700 C 220 740, 140 820 80 720 C 20 620 40 460 120 340 C 200 220 280 160 500 120 Z'
            fill='currentColor'
            className='text-white/[0.05]'
          />
          {/* Echo inner fluid shape */}
          <path
            d='M540 180 C 720 140, 860 220 880 380 C 900 540, 780 620 680 670 C 580 720 460 600 360 630 C 260 660 200 720 140 650 C 80 580 100 460 160 360 C 220 260 360 220 540 180 Z'
            fill='currentColor'
            className='text-white/[0.035]'
          />
        </svg>
      </motion.div>

      {/* ── LAYER 2: BOTTOM-RIGHT FLUID BLOB (Animated & Counter-rotating) ── */}
      <motion.div
        animate={{
          x: [0, -45, 30, 0],
          y: [0, 35, -25, 0],
          rotate: [0, -7, 9, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute -bottom-24 -right-24 w-[600px] sm:w-[850px] lg:w-[1100px] h-[600px] sm:h-[850px] lg:h-[1100px]'
      >
        <svg
          viewBox='0 0 1000 1000'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full'
        >
          <path
            d='M920 520 C 920 740, 780 920 560 920 C 340 920 220 800 180 680 C 140 560 240 460 340 360 C 440 260 620 320 760 320 C 900 320 920 300 920 520 Z'
            fill='currentColor'
            className='text-white/[0.045]'
          />
          <path
            d='M860 560 C 860 760 720 880 540 880 C 360 880 260 780 230 680 C 200 580 280 500 360 420 C 440 340 580 380 700 380 C 820 380 860 360 860 560 Z'
            fill='currentColor'
            className='text-white/[0.03]'
          />
        </svg>
      </motion.div>

      {/* ── LAYER 3: LEFT-CENTER ORGANIC FLUID WAVE ── */}
      <motion.div
        animate={{
          x: [0, 35, -30, 0],
          y: [0, -30, 35, 0],
          scale: [0.96, 1.07, 0.98, 0.96],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute top-1/4 -left-28 w-[500px] sm:w-[700px] lg:w-[900px] h-[500px] sm:h-[700px] lg:h-[900px]'
      >
        <svg
          viewBox='0 0 800 800'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-full'
        >
          <path
            d='M140 400 C 140 240 280 140 440 200 C 600 260 680 440 640 580 C 600 720 420 760 260 740 C 140 720 140 560 140 400 Z'
            fill='currentColor'
            className='text-white/[0.04]'
          />
        </svg>
      </motion.div>

      {/* ── DYNAMIC VECTOR CONTOUR LINES (Animated Flow & Breathing Curves) ── */}
      <svg
        className='absolute inset-0 w-full h-full'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        viewBox='0 0 1440 900'
        fill='none'
      >
        {/* Main contour line traversing across from mid-left under the top-right lobe */}
        <motion.path
          d='M-50 360 C 180 520, 360 560, 520 480 C 680 400, 780 380, 840 460 C 900 540, 1060 620, 1260 560 C 1380 520, 1460 540, 1520 580'
          stroke='rgba(255, 255, 255, 0.22)'
          strokeWidth='1.5'
          strokeLinecap='round'
          fill='none'
          animate={{
            d: [
              'M-50 360 C 180 520, 360 560, 520 480 C 680 400, 780 380, 840 460 C 900 540, 1060 620, 1260 560 C 1380 520, 1460 540, 1520 580',
              'M-50 390 C 200 480, 380 590, 540 440 C 700 360, 760 410, 860 430 C 940 510, 1080 650, 1240 530 C 1400 490, 1440 570, 1520 550',
              'M-50 340 C 170 540, 340 540, 500 500 C 660 420, 800 360, 830 480 C 880 560, 1040 600, 1280 580 C 1360 540, 1470 520, 1520 600',
              'M-50 360 C 180 520, 360 560, 520 480 C 680 400, 780 380, 840 460 C 900 540, 1060 620, 1260 560 C 1380 520, 1460 540, 1520 580',
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated Dashed Flowing Line */}
        <motion.path
          d='M-40 420 C 200 580, 380 620, 540 540 C 700 460, 800 440, 860 520 C 920 600, 1080 680, 1280 620 C 1400 580, 1480 600, 1540 640'
          stroke='rgba(255, 255, 255, 0.16)'
          strokeWidth='1.2'
          strokeDasharray='8 8'
          fill='none'
          animate={{
            strokeDashoffset: [0, -96],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Lower contour curve flowing from left to bottom-right */}
        <motion.path
          d='M-30 780 C 120 800, 160 880, 120 940 C 80 1000, 20 1040, 0 1080 M120 820 C 320 840, 520 720, 680 760 C 840 800, 940 920, 1140 900 C 1280 880, 1400 940, 1500 960'
          stroke='rgba(255, 255, 255, 0.18)'
          strokeWidth='1.25'
          strokeLinecap='round'
          fill='none'
          animate={{
            d: [
              'M-30 780 C 120 800, 160 880, 120 940 C 80 1000, 20 1040, 0 1080 M120 820 C 320 840, 520 720, 680 760 C 840 800, 940 920, 1140 900 C 1280 880, 1400 940, 1500 960',
              'M-30 760 C 130 780, 170 860, 130 920 C 90 980, 30 1020, 0 1060 M120 850 C 300 810, 540 750, 660 790 C 860 770, 920 950, 1160 870 C 1260 850, 1420 910, 1500 940',
              'M-30 780 C 120 800, 160 880, 120 940 C 80 1000, 20 1040, 0 1080 M120 820 C 320 840, 520 720, 680 760 C 840 800, 940 920, 1140 900 C 1280 880, 1400 940, 1500 960',
            ],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary echo curve */}
        <motion.path
          d='M600 360 C 760 380, 880 460, 1020 480 C 1180 500, 1340 440, 1480 470'
          stroke='rgba(255, 255, 255, 0.14)'
          strokeWidth='1'
          strokeDasharray='5 5'
          fill='none'
          animate={{
            strokeDashoffset: [0, -60],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Top-left sweeping contour line */}
        <motion.path
          d='M-20 180 C 140 220, 280 160, 420 240 C 520 300, 580 260, 640 180'
          stroke='rgba(255, 255, 255, 0.16)'
          strokeWidth='1'
          fill='none'
          animate={{
            y: [0, 12, -8, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}
