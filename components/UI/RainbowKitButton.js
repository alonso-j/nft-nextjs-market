import { ConnectButton } from '@rainbow-me/rainbowkit';

const RainbowKitButton = ({ showBalance }) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}>
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="py-1 px-3 space-x-3 rounded-xl shadow-sm text-white bg-zinc-800 hover:bg-opacity-80 hover:scale-105 hover:shadow-md transition-all duration-700 whitespace-nowrap">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <div className="flex">
                  <div className="flex justify-center items-center mr-2">
                    <button
                      onClick={openChainModal}
                      className="flex items-center"
                      type="button">
                      {chain.hasIcon && (
                        <div
                          className="mr-1 w-5 h-5 rounded-full overflow-hidden"
                          style={{
                            background: chain.iconBackground,
                          }}>
                          {chain.iconUrl && (
                            <picture>
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                className="w-5 h-5"
                              />
                            </picture>
                          )}
                        </div>
                      )}
                    </button>
                  </div>
                  <a
                    className="flex gap-3 py-1 px-3 border border-zinc-800 rounded-xl hover:cursor-pointer"
                    onClick={openAccountModal}>
                    <span>
                      {account.displayName}
                      {showBalance ? `(${account.displayBalance})` : ''}
                    </span>
                  </a>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default RainbowKitButton;
