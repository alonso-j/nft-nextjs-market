import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ThirdwebProvider } from '@thirdweb-dev/react';

import '@rainbow-me/rainbowkit/styles.css';

const activeChain = chain.rinkeby;

const { chains, provider } = configureChains(
  [activeChain],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'NFT Marketplace',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChain.id}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={lightTheme()}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ThirdwebProvider>
  );
}

export default MyApp;
