function Card({ title, description, url }) {
  return (
    <a
      href={url}
      className="max-w-xs m-4 p-6 text-left text-inherit no-underline border border-slate-200 rounded-lg transition duration-150 ease-linear hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500">
      <h2 className="mb-4 text-2xl">{title}</h2>
      <p className="m-0 text-xl leading-normal">{description}</p>
    </a>
  );
}

export default Card;
