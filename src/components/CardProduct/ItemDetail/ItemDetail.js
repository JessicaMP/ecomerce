import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";

const ItemContainer = ({ prod, action }) => {
  return (
    <Item
      {...prod}
      aditionalSection={
        <section className="space-y-3">
          <ItemDescription label="Categoria" description={prod.category} />
          <ItemDescription label="Descripción" description={prod.description} />
          <ItemDescription label="Precio" description={`$${prod.price}`} />
        </section>
      }
      footer={<ItemCount onAdd={action} stock={prod.stock} />}
    />
  );
};

const ItemDescription = ({ label, description }) => {
  return (
    <p className="text-sm text-center">
      <span className="font-semibold text-xs">{label}:</span> {description}
    </p>
  );
};

const ItemDetail = (prod) => {
  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity,
    };
    console.log({ productToAdd });
  };

  return <ItemContainer key={prod.id} prod={prod} action={handleOnAdd} />;
};

export default ItemDetail;
