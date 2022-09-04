import Carouseltem from './Carouseltem';

const { title, description, price, currency } = {
  title: 'Lorem Ipsum Dolor',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, doloribus.',
  price: '0.1',
  currency: 'ETH',
};

function Carousel() {
  return (
    <div className="w-full h-[36rem] p-8 rounded-xl shadow-sm overflow-hidden md:bg-slate-200/75">
      <div className="flex flex-col items-center justify-center h-full w-full space-y-4 overflow-auto md:flex-row md:space-y-0 md:space-x-4">
        <Carouseltem
          title={title}
          description={description}
          price={price}
          currency={currency}
        />
        <Carouseltem
          title={title}
          description={description}
          price={price}
          currency={currency}
        />
        <Carouseltem
          title={title}
          description={description}
          price={price}
          currency={currency}
        />
        <Carouseltem
          title={title}
          description={description}
          price={price}
          currency={currency}
        />
        <Carouseltem
          title={title}
          description={description}
          price={price}
          currency={currency}
        />
      </div>
    </div>
  );
}

export default Carousel;
