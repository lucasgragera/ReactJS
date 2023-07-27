import { useState } from "react";
import './ItemCount.css';

export const ItemCount = ({ stock, onAdd }) => {
  //Estado para manejar el contador
  const [count, setCount] = useState(1);

  const handleSum = () => {
    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {
    //Retornaria el numero mas grande entre 1 y count - 1, quiere decir que si count - 1 es === 0 entonces retornaria 1 al ser 0 mas pequeño que uno
    setCount(Math.max(1, count - 1));
  };

  return (
    <div className="item-count">
      <div className="item-count__buttons">
        <button onClick={() => handleSub()}>-</button>
        <span>{count}</span>
        <button onClick={() => handleSum()}>+</button>
      </div>
      <button className="item-count__add" disabled={!stock} onClick={() => onAdd(count)}>
        Agregar a carrito
      </button>
    </div>
  );
};
