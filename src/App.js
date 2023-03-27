import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/CardProduct/ItemListContainer/ItemListContainer";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
