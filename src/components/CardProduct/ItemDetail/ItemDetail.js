import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";
import { useCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const classButton =
  "rounded-md w-auto p-3 text-xs border border-violet-600 text-violet-600 hover:bg-violet-600 hover:bg-opacity-80  hover:text-white cursor-pointer";

const ItemContainer = ({ prod, action }) => {
  const { isInCart, addItem } = useCart();

  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id: prod.id,
      name: prod.name,
      price: prod.price,
      img: prod.img,
      quantity,
    };
    addItem(productToAdd);
  };

  return (
    <Item
      {...prod}
      aditionalSection={
        <section className="space-y-3">
          <ItemDescription label="Categoria" description={prod.category} />
          <ItemDescription label="Descripción" description={prod.description} />
          <ItemDescription label="Precio" description={`$${prod.price}`} />
        </section>
      }
      footer={
        <div className="flex flex-col items-center space-y-4">
          <ItemCount onAdd={handleOnAdd} stock={prod.stock} />
          {isInCart(prod.id) && (
            <Link to="/cart" className={classButton}>
              Terminar compra
            </Link>
          )}
        </div>
      }
    />
  );
};

const ItemDescription = ({ label, description }) => {
  return (
    <p className="text-sm text-center">
      <span className="font-semibold text-xs">{label}:</span> {description}
    </p>
  );
};

const ItemDetail = (prod) => {
  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity,
    };
    console.log({ productToAdd });
  };

  return <ItemContainer key={prod.id} prod={prod} action={handleOnAdd} />;
};

export default ItemDetail;
