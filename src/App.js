import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/CardProduct/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/CardProduct/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
