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
    <div className="flex flex-col justify-center items-center w-full h-[36rem] px-2 space-x-8 bg-slate-200/75 rounded-xl shadow-sm md:flex-row">
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
  );
}

export default Carousel;