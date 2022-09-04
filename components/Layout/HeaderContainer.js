import RainbowKitButton from '../UI/RainbowKitButton';

function HeaderContainer() {
  return (
    <div className="fixed top-0 left-0 w-screen flex flex-1 justify-between items-center h-14 py-4 px-12 shadow-md bg-yellow-50/60 z-50">
      <div className="w-full flex justify-start">Logo</div>
      <div className="w-full flex justify-end">
        <RainbowKitButton showBalance={false} />
      </div>
    </div>
  );
}

export default HeaderContainer;
