const CartItem = ({ prod }) => {
  return (
    <div className="bg-violet-600 bg-opacity-10 border border-solid border-gray-200 rounded-xl space-y-4 p-4 flex gap-5">
      <picture className="flex justify-center">
        <img
          src={prod.img}
          alt={prod.name}
          className="w-28 h-28 object-cover object-center"
        />
      </picture>
      <div className="space-y-2">
        <h2 className="font-bold capitalize">{prod.name}</h2>
        <div>
          <p>Cantidad</p>
          <p> {prod.quantity}</p>
        </div>

        <p>${prod.price} x Unidad</p>
      </div>
    </div>
  );
};

export default CartItem;
