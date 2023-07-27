import { Link } from 'react-router-dom';
import './ItemListContainer.css'
import React, { useEffect, useState } from "react";
import { getGym } from '../lib/gym.requests';
import Filter from './Filter/Filter'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]); //Importante iniciar en array para que no falle el metodo map
  const [isLoading, setIsLoading] = useState(true);
  //Poner en efectos peticiones o cosas asincronas
  useEffect(() => {

   getGym() //Se simula una peticion
    .then(res => {
      setIsLoading(false); //Cuando esta se resuelve cambia al estado para dejar de cargar
      setProducts(res)} //Ademas setea productos con lo que resolvio la promesa (no hay catch porque estamos segurods de que siempre hay algo)
      
      ) 

  }, []);

  // const handleProductFiltered = ()
  return (
    <div>
      {isLoading ?
        <h2>Cargdando</h2>
        :
        <div className="item-list">
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img className="texto" src={product.img} alt="" />
              <h3 className="texto" > {product.price}</h3>
              <h5 className="texto" >{product.category}</h5>
              <Link to={`/detail/${product.id}`}>
                <button>Comprar</button>
              </Link>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default ItemListContainer