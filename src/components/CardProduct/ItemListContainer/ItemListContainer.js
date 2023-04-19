import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProducts, getProductsByCategory } from "../../../assets/data/mock";
import { getDocs, collection } from "firebase/firestore";
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
    setLoading(true);

    const fetchProducts = async () => {
      const productsRef = collection(db, "products");
      const { docs = [] } = await getDocs(productsRef);
      const newDocs = setStructure(docs);
      console.log({ newDocs });
      setProducts(newDocs);
    };

    // getDocs(productsRef).then((snapshot) => {
    //   console.log({ snapshot });
    // });

    // const asyncFunction = categoryId ? getProductsByCategory : getProducts;
    // setLoading(true);
    // asyncFunction(categoryId)
    //   .then((products) => {
    //     setProducts(products);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
    fetchProducts();
    setLoading(false);
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
