import type { NextPage } from 'next';
import Head from 'next/head';

const RESUME = '/DanielDeLaRosaResume2026.pdf';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daniel De La Rosa</title>
        <meta name="description" content="Daniel De La Rosa — Senior Full Stack Engineer." />
      </Head>

      <main className="inter flex min-h-screen min-h-[100dvh] w-full flex-col items-center justify-center bg-black px-6 text-center text-white">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Daniel De La Rosa</h1>

        <p className="mt-3 text-base text-neutral-400 sm:text-lg">Senior Full Stack Engineer</p>

        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 text-sm text-[#e5c07b] underline underline-offset-4 transition-colors hover:text-[#f2d9a6]"
        >
          Résumé
        </a>
      </main>
    </>
  );
};

export default Home;
