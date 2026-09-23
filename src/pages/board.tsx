'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BoardSection from '@/components/sections/BoardSection';
import Head from 'next/head';

export default function BoardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#board');
  }, [router]);

  return (
    <>
      <Head>
        <title>Board Members | Data Science Society BU</title>
        <meta name="description" content="Meet the leadership and executive team of Data Science Society at Bennett University." />
      </Head>
      <div className="w-full min-h-screen bg-black text-white">
        <BoardSection />
      </div>
    </>
  );
}
