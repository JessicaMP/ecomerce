import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

const classButton = 'rounded-md w-auto p-3 text-xs bg-violet-600 flex justify-center items-center text-white cursor-pointer'
  const decrement = () => {
    if(quantity > 1) {
        setQuantity(quantity - 1)
    }     
  };

  const increment = () => {
    if(quantity < stock) {
        setQuantity(quantity+1)
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto space-y-4">
      <div className="flex justify-center items-center space-x-8">
        <button className={classButton} onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <h4 className="text-xl p-5 m-0">{quantity}</h4>
        <button  className={classButton} onClick={increment}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div>
        <button className={classButton} onClick={() => onAdd(quantity)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
