import { useState, useEffect } from 'react';
import { useNFTDrop, useNFTs } from '@thirdweb-dev/react';

import { NFT_DROP_ADDESS } from '../utils/constants';
import Head from 'next/head';
import Footer from '../components/Layout/Footer';
import HeaderContainer from '../components/Layout/HeaderContainer';
import Card from '../components/UI/Card';
import Carousel from '../components/Carousel/Carousel';

function Home() {
  const [data, setData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [tokens, setTokens] = useState([]);
  const drop = useNFTDrop(NFT_DROP_ADDESS);
  const {
    data: nfts,
    isLoading: isLoadingNFTs,
    error: dropError,
  } = useNFTs(drop);

  useEffect(() => {
    if (dropError != null) {
      console.log(dropError);
    }

    if (!isLoadingNFTs) {
      setTokens(nfts);
    }
  }, [isLoadingNFTs, nfts, dropError]);

  useEffect(() => {
    fetch('/api/data')
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

      <main className="min-h-screen flex flex-1 flex-col mx-12 py-8">
        <section className="h-screen flex flex-col items-center justify-center main-gradient bg-clip-text text-transparent select-none">
          <p className="font-roboto font-black text-8xl md:text-[10rem] lg:text-[14rem] xl:text-[18rem] 2xl:text-[22rem] p-0 m-0">
            MARKET
          </p>
          <p className="font-prompt lg:text-xl xl:text-3xl">NFT</p>
        </section>

        <section>
          <div className="flex space-x-6 text-left">
            <div className="py-2">
              <p className="font-roboto font-normal text-6xl mb-6">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                odit voluptatibus quaerat? Eum, quia veniam minima fugiat ipsam
                dolores ipsum!
              </span>
            </div>

            <Carousel />
          </div>
        </section>

        <section>
          <h1 className="m-0 leading-normal text-6xl text-center">
            Welcome to{' '}
            <a
              href="https://nextjs.org"
              className="text-center text-blue-400 no-underline hover:underline focus:underline active:underline">
              Next.js!
            </a>
          </h1>

          <p className="text-center my-16 leading-normal text-xl">
            NFTs in this drop{' '}
            <code className="code">
              {tokens === undefined ? 0 : tokens.length}
            </code>
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
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
