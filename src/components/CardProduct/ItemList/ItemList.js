import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemContainer = (prod) => {
  return (
    <Item
      {...prod}
      aditionalSection={
        <p className="flex justify-around text-xs">Precio: ${prod.price}</p>
      }
      footer={
        <Link to={`/item/${prod.id}`} className="rounded-md w-auto p-3 text-xs bg-violet-600 hover:bg-opacity-80 flex justify-center items-center text-white cursor-pointer">
          Ver detalle
        </Link>
      }
    />
  );
};

const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((prod) => (
        <ItemContainer key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
