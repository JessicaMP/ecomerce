import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../../services/firebase/firebaseConfig";
import { setStructure } from "../../../utils";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    const fetchProductById = async () => {
      setLoading(true);
      const productRef = doc(db, "products", itemId);
      const productItem = await getDoc(productRef);
      const newProduct = setStructure([productItem]);
      setProduct(newProduct[0]);
      setLoading(false);
    };
    fetchProductById();
  }, [itemId]);

  return (
    <div className="flex flex-column justify-center items-center">
      {loading ? <p>Cargando...</p> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
