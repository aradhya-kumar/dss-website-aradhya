import { NavbarDemo } from '../components/NavbarDemo';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Data Science Society - BU</title>
        <meta
          name="description"
          content="Official website of the Data Science Society at Bennett University. Explore AI workshops, flagship hackathons, and our leadership board."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/DSS_Logo.png" />
      </Head>
      <NavbarDemo />
      <main className="min-h-screen bg-black text-white">{children}</main>
    </>
  );
}