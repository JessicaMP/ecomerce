import { createContext, useState, useContext } from "react";

const CartContext = createContext("valor inicial");

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
      return;
    }
    console.log("No se agrega porque ya esta en el carrito");
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.quantity;
    });

    return totalQuantity;
  };

  const totalQuantity = getTotalQuantity();

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
