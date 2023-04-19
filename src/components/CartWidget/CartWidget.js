import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";

const CartWidget = ({ buttonStyle }) => {
  const { totalQuantity } = useCart();

  return (
    <div className={buttonStyle}>
      <FontAwesomeIcon icon={faCartShopping} />
      {totalQuantity}
    </div>
  );
};

export default CartWidget;
