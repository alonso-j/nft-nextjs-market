import { useState, useEffect } from 'react';

import Head from 'next/head';
import Footer from '../components/Layout/Footer';
import HeaderContainer from '../components/Layout/HeaderContainer';
import Card from '../components/UI/Card';

function Home() {
  const [data, setData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoadingData(false);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <HeaderContainer />
      </header>

      <main className="min-h-screen flex flex-1 flex-col items-center mx-12 py-8">
        <h1 className="m-0 leading-normal text-6xl text-center">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-center text-blue-400 no-underline hover:underline focus:underline active:underline">
            Next.js!
          </a>
        </h1>

        <p className="text-center my-16 leading-normal text-xl">
          Get started by editing <code className="code">pages/index.js</code>
        </p>

        <div className="flex flex-col flex-wrap justify-center items-center w-full md:flex-row md:max-w-3xl">
          {isLoadingData ? (
            <h4>Loading...</h4>
          ) : (
            data.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                url={item.url}
              />
            ))
          )}
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
