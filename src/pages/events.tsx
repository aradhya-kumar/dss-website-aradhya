'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import EventsSection from '@/components/sections/EventsSection';
import Head from 'next/head';

export default function EventsPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#events');
  }, [router]);

  return (
    <>
      <Head>
        <title>Events Timeline | Data Science Society BU</title>
        <meta name="description" content="Explore past hackathons, workshops, and speaker sessions organized by the Data Science Society at Bennett University." />
      </Head>
      <div className="w-full min-h-screen bg-black text-white">
        <EventsSection />
      </div>
    </>
  );
}
