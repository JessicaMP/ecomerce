import { createContext, useState, useContext } from "react";

const defaultValue = null;
const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    } else {
      console.log("No se agrega porque ya esta en el carrito");
    }
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    if (cart.length === 0) return totalQuantity;
    totalQuantity = cart.reduce((accumulator, currentValue) => {
      return accumulator?.quantity + currentValue?.quantity;
    });
    return totalQuantity;
  };

  const totalQuantity = getTotalQuantity();

  return (
    <CartContext.Provider value={{ isInCart, addItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
