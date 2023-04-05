import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/CardProduct/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/CardProduct/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Todos nuestros productos"} />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer
                  greeting={"Productos filtrados por categoria"}
                />
              }
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
