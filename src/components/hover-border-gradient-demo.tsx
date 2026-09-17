'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import FluidContourBackground from '@/components/ui/fluid-contour-background';

// Target event date: 17 September 2026, 18:00 IST
const TARGET_DATE = new Date('2026-09-17T18:00:00+05:30').getTime();

export default function HoverBorderGradientDemo() {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    } | null>(null);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = TARGET_DATE - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                const elapsed = Math.abs(difference);
                setTimeLeft({
                    days: -Math.floor(elapsed / (1000 * 60 * 60 * 24)),
                    hours: -Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: -Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: -Math.floor((elapsed % (1000 * 60)) / 1000),
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full bg-black relative flex flex-col items-center justify-center antialiased py-24 px-4 overflow-hidden'>
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
                            Upcoming Event
                        </span>
                    </HoverBorderGradient>
                </div>

                {/* ── TECHNOVA-STYLE TITLE WITH WHITE DSS SVG ── */}
                <div className='flex items-center justify-center gap-3 sm:gap-5 md:gap-6 flex-wrap mb-6'>
                    <Image
                        src='/Assets/DSS_Logo_White.svg'
                        alt='DSS Logo'
                        width={288}
                        height={95}
                        priority
                        className='h-9 sm:h-14 md:h-18 lg:h-22 w-auto object-contain translate-y-1'
                    />
                    <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-neutral-100 tracking-wider font-sans text-center'>
                        UNLOCKED
                    </h1>
                </div>

                {/* ── ITALIC QUOTED TAGLINE ── */}
                <p className='text-neutral-300 italic font-poppins text-center text-sm sm:text-base md:text-xl max-w-3xl mx-auto mb-5 leading-relaxed px-2'>
                    &quot;Ignite Your Passion for Innovation: Join Us for a Spectacular Fusion of Technology and Talent!&quot;
                </p>

                {/* ── QUOTED DATE BADGE ── */}
                <p className='text-neutral-100 font-bold text-center text-base sm:text-lg md:text-2xl mb-12 font-sans tracking-wide'>
                    &quot;17th September 2026 • 6:00 PM • P-LH 101&quot;
                </p>

                {/* ── GLASSMORPHISM COUNTDOWN TIMER ── */}
                <div className='flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-16 text-center flex-wrap px-2'>
                    {/* Days */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? timeLeft.days : '219'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Days
                        </span>
                    </div>

                    {/* Hours */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? String(Math.abs(timeLeft.hours)).padStart(2, '0') : '15'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Hours
                        </span>
                    </div>

                    {/* Minutes */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? String(Math.abs(timeLeft.minutes)).padStart(2, '0') : '56'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Minutes
                        </span>
                    </div>

                    {/* Seconds */}
                    <div className='flex flex-col items-center justify-center min-w-[76px] sm:min-w-[105px] md:min-w-[130px] p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-white/20 transition-all duration-300'>
                        <span className='text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans tracking-tight'>
                            {timeLeft !== null ? String(Math.abs(timeLeft.seconds)).padStart(2, '0') : '48'}
                        </span>
                        <span className='text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-poppins font-medium mt-2'>
                            Seconds
                        </span>
                    </div>
                </div>

                {/* ── EVENT DESCRIPTION & REGISTER CTA ── */}
                <div className='max-w-3xl mx-auto text-center mb-16'>
                    <p className='text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-poppins'>
                        DSS Unlocked is an interactive orientation experience that takes juniors behind the scenes of the Data Science Society. From AI, Data Science, and emerging technologies to our teams, exciting events, real-world projects, and opportunities — step in, get involved, and discover what you can build with DSS!
                    </p>

                    <div className='flex justify-center text-center'>
                        <a
                            href='https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkEfWOvGjyq5HiO99rdTV-I9UOUE4N0ZOVjlDMFVLRkJPVFVTSkZIOUFDWi4u'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <HoverBorderGradient
                                containerClassName='rounded-full'
                                className='dark:bg-black bg-white text-black dark:text-white flex cursor-pointer items-center space-x-2 px-6 py-2.5 text-base font-semibold'
                            >
                                <AceternityLogo />
                                <span>Register Now!</span>
                            </HoverBorderGradient>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const AceternityLogo = () => {
    return (
        <svg
            width='66'
            height='65'
            viewBox='0 0 66 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-black dark:text-white'
        >
            <path
                d='M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696'
                stroke='currentColor'
                strokeWidth='15'
                strokeMiterlimit='3.86874'
                strokeLinecap='round'
            />
        </svg>
    );
};
