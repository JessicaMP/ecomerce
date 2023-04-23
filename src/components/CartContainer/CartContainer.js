import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem.js";

const CartContainer = () => {
  const { cart, total } = useCart();

  return (
    <div className="container mx-auto py-5">
      {cart.length === 0 ? (
        <div className="text-center">
          No tiene selecionado ningún producto en el carrito
        </div>
      ) : (
        <div className=" space-y-5">
          <h1 className="text-2xl text-center font-bold">Detalle del pedido</h1>
          <div className="grid grid-cols-3 gap-5 justify-center ">
            <div className="col-span-2">
              <div>
                {cart.map((prod) => {
                  return <CartItem prod={prod} key={prod.id} />;
                })}
              </div>
            </div>

            <div className="col-span-1">
              <h1>Total de la compra ${total}</h1>
              <Link to="/checkout" className="Option">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
