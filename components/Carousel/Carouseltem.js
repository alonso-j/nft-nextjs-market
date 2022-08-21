function Carouseltem({ title, description, price, currency }) {
  return (
    <div className="relative min-w-[18rem] h-full min-h-full bg-[#FFAFCC] rounded-lg shadow-md group">
      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col h-1/3 p-4 space-y-1 main-gradient-transparent-lg opacity-0 group-hover:opacity-100 duration-500">
        <div className="">
          <p className="text-2xl">{title}</p>
        </div>

        <div className="flex flex-1 space-x-2">
          <div className="self-center w-4/5">
            <p className="text-md">{description}</p>
          </div>
          <div className="w-0.5 h-full bg-slate-800"></div>
          <div className="flex flex-col flex-1 justify-center items-center uppercase">
            <p>{price}</p>
            <p>{currency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carouseltem;
