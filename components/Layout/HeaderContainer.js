import RainbowKitButton from '../UI/RainbowKitButton';

function HeaderContainer() {
  return (
    <div className="flex flex-1 justify-between items-center h-14 py-4 px-12 border-b-2">
      <div className="w-full flex justify-start">Logo</div>
      <div className="w-full flex justify-end">
        <RainbowKitButton showBalance={false} />
      </div>
    </div>
  );
}

export default HeaderContainer;
