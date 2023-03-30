import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../../assets/data/mock";

const NotContent = ({label}) => {
  return (
    <div className="flex justify-center items-center p-10">
    <p className="font-medium text-base">{label}</p>
    </div>
  )
}

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;
    setLoading(true);
    asyncFunction(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-center text-black font-bold text-xl"> {greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
       <NotContent label={`No hay productos en la categoria ${categoryId}`}/>
      )}
    </div>
  );
};

export default ItemListContainer;
