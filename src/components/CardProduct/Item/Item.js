const Item = ({ name, img, footer, aditionalSection}) => {
  return (
    <article className="p-8 m-8 bg-red-100 border border-solid border-gray-200 rounded-xl space-y-4">
      <header className="flex justify-center">
        <h2 className="font-semibold text-xl uppercase">{name}</h2>
      </header>
      <picture className="flex justify-center">
        <img
          src={img}
          alt={name}
          className="w-28 h-28 object-cover object-center"
        />
      </picture>
      {aditionalSection}
      <footer className="flex justify-center ">
        {footer}
      </footer>
    </article>
  );
};

export default Item;
