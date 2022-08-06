import { ConnectButton } from '@rainbow-me/rainbowkit';

function HeaderContainer() {
  return (
    <div className="flex flex-1 justify-between items-center h-14 py-4 px-12 border-b-2">
      <div className="w-full flex justify-start">Logo</div>
      <h2 className="w-full flex justify-center">NFT</h2>
      <div className="w-full flex justify-end">
        <ConnectButton
          label="Sign in"
          chainStatus="none"
          showBalance={false}
          accountStatus={{
            smallScreen: 'avatar',
            largeScreen: 'full',
          }}
        />
      </div>
    </div>
  );
}

export default HeaderContainer;
