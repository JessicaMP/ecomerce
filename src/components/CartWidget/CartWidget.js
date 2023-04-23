import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = ({ buttonStyle }) => {
  const { totalQuantity } = useCart();

  return (
    <Link className={buttonStyle} to={"/cart"}>
      <FontAwesomeIcon icon={faCartShopping} />
      {totalQuantity > 0 ? totalQuantity : null}
    </Link>
  );
};

export default CartWidget;
