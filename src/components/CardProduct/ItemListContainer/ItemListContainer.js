import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase/firebaseConfig";

const NotContent = ({ label }) => {
  return (
    <div className="flex justify-center items-center p-10">
      <p className="font-medium text-base">{label}</p>
    </div>
  );
};

const setStructure = (products) => {
  return products.map((product) => {
    const data = product.data();
    return { id: product.id, ...data };
  });
};

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async (filterSearch) => {
      setLoading(true);
      const productsRef = filterSearch;
      const { docs = [] } = await getDocs(productsRef);
      let newDocs = docs;
      try {
        newDocs = setStructure(docs);
      } catch (error) {
        console.log({ error });
      }
      setLoading(false);
      setProducts(newDocs);
    };

    const allProducts = collection(db, "products");
    const filterItem = categoryId
      ? query(allProducts, where("category", "==", categoryId))
      : allProducts;

    fetchProducts(filterItem);
  }, [categoryId]);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-center text-black font-bold text-xl"> {greeting}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <NotContent label={`No hay productos en la categoria ${categoryId}`} />
      )}
    </div>
  );
};

export default ItemListContainer;
