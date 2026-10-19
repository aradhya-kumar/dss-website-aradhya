'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import FluidContourBackground from '@/components/ui/fluid-contour-background';

// Target countdown deadline: 26 October 2026, 11:59:59 PM IST
const TARGET_DATE = new Date('2026-10-26T23:59:59+05:30').getTime();

export default function HoverBorderGradientDemo() {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        const updateCountdown = () => {
            const now = Date.now();
            const difference = Math.max(0, TARGET_DATE - now);

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            // Stop the interval as soon as deadline is reached
            if (difference === 0 && interval) {
                clearInterval(interval);
                interval = null;
            }
        };

        updateCountdown();

        if (TARGET_DATE > Date.now()) {
            interval = setInterval(updateCountdown, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, []);

    return (
        <div className='w-full bg-black relative flex flex-col items-center justify-center antialiased pt-24 pb-8 sm:pb-12 md:pb-14 px-4 overflow-hidden'>
            {/* ── ORGANIC FLUID CONTOUR BACKGROUND ── */}
            <FluidContourBackground />

            {/* ── FOREGROUND CONTENT ── */}
            <div className='relative z-10 w-full flex flex-col items-center justify-center'>
                {/* ── UPCOMING EVENT BADGE (Glowing Aura with HoverBorderGradient) ── */}
                <div className='relative mb-8 flex items-center justify-center'>
                    {/* Ambient soft glow pulse behind badge */}
                    <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 opacity-40 blur-xl animate-pulse pointer-events-none' />

                    <HoverBorderGradient
                        as='div'
                        containerClassName='rounded-full shadow-[0_0_30px_rgba(255,255,255,0.18)]'
                        className='bg-black/90 text-neutral-100 flex items-center justify-center px-8 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg md:text-xl font-extrabold uppercase tracking-widest backdrop-blur-xl'
                        duration={1.5}
                    >
                        <span className='bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]'>
                            UPCOMING EVENT
                        </span>
                    </HoverBorderGradient>
                </div>

                {/* ── TECHNOVA-STYLE TITLE WITH WHITE DSS SVG ── */}
                <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 mb-6'>
                    <div className='flex justify-center'>
                        <Image
                            src='/Assets/DSS_Logo_White.svg'
                            alt='DSS Logo'
                            width={288}
                            height={95}
                            priority
                            className='h-9 sm:h-14 md:h-18 lg:h-22 w-auto object-contain'
                        />
                    </div>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-neutral-100 tracking-wider font-sans text-center'>
                        BENNETT’S GOT DATA
                    </h1>
                </div>

                {/* ── ITALIC QUOTED TAGLINE ── */}
                <p className='text-neutral-300 italic font-poppins text-center text-sm sm:text-base md:text-xl max-w-3xl mx-auto mb-5 leading-relaxed px-2'>
                    &quot;Think. Predict. Present. Win.&quot;
                </p>

                {/* ── QUOTED DATE BADGE ── */}
                <p className='text-neutral-100 font-bold text-center text-base sm:text-lg md:text-2xl mb-12 font-sans tracking-wide'>
                    &quot;26 October 2026&quot;
                </p>

                {/* ── GLASSMORPHISM COUNTDOWN TIMER ── */}
                <div className='flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-16 text-center flex-wrap px-2'>
                    {/* Days */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? String(timeLeft.days).padStart(2, '0') : '00'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Days
                        </span>
                    </div>

                    {/* Hours */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? String(timeLeft.hours).padStart(2, '0') : '00'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Hours
                        </span>
                    </div>

                    {/* Minutes */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? String(timeLeft.minutes).padStart(2, '0') : '00'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Minutes
                        </span>
                    </div>

                    {/* Seconds */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? String(timeLeft.seconds).padStart(2, '0') : '00'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Seconds
                        </span>
                    </div>
                </div>

                {/* ── EVENT DESCRIPTION ── */}
                <div className='max-w-3xl mx-auto text-center'>
                    <p className='text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-poppins'>
                        Bennett&apos;s Got Data is a competitive campus Ideathon where innovation meets strategy. Participants will develop and present ideas before a panel of judges, while predicting and locking in the score they believe their idea will receive. Once the judges reveal their final scores, participants&apos; predictions will be compared with the actual results. An exact match creates the signature DSS Wala Latent winning moment! The event combines creative problem-solving, strategic thinking, presentation skills, and audience engagement in a unique and exciting competition.
                    </p>
                </div>
            </div>
        </div>
    );
}
