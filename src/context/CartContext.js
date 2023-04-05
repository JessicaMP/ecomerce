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

  return (
    <CartContext.Provider value={{ isInCart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
