import ItemCount from "../ItemCount/ItemCount";

const ItemDescription = ({ label, description }) => {
  return (
    <p className="text-sm text-center">
      <span className="font-medium text-xs">{label}:</span> {description}
    </p>
  );
};

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id,
      name,
      price,
      quantity,
    };
    console.log({ productToAdd });
  };

  return (
    <article className="p-8 m-8  bg-red-100 border border-solid border-gray-200 rounded-xl">
      <header className="flex justify-center">
        <h2 className="font-semibold text-xl uppercase">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section className="space-y-3">
        <ItemDescription label="Categoria" description={category}/>
        <ItemDescription label="Descripción" description={description}/>
        <ItemDescription label="Precio" description={`$${price}`}/>
      </section>
      <footer className="flex justify-center">
        <ItemCount onAdd={handleOnAdd} stock={stock} />
      </footer>
    </article>
  );
};

export default ItemDetail;
