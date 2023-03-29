import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <article className="p-8 m-8 bg-red-100 border-solid border-2 border-gray-100 rounded-xl text-xs">
      <header className="flex flex-col mb-2.5 rounded-3xl">
        <h2 className="flex justify-center">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p className="flex justify-around text-xs">Precio: ${price}</p>
      </section>
      <footer className="flex justify-center">
        <Link to={`/item/${id}`} className="Option">
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};

export default Item;
