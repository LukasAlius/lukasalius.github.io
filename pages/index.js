import Head from 'next/head';
import { useEffect, useState } from 'react';
import SecretMessage from '../components/SecretMessage';
import Terminal from '../components/Terminal';

export default function Home() {
  const [showGameViewport, setShowGameViewport] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);



  return (
    <div className="min-h-screen flex flex-row justify-center items-center bg-green-50">
      <Head>
        <title>Lukas Alius. Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/fira-code/FiraCode-Regular.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

      {!isLoading && <SecretMessage />}

      <main className="z-10 flex">
        <Terminal showGameViewport={showGameViewport} />
      </main>
    </div>
  );
}
