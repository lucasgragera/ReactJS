import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css'
import React, { useEffect, useState } from "react";
import { getGym } from '../lib/gym.requests';
import Filter from '../Filter/Filter'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]); //Importante iniciar en array para que no falle el metodo map
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams()

  useEffect(() => {
    if(!category) {
      getGym()
      .then( res => {
        setProducts(res)
      })
      .catch( error => console.log(error))
      .finally(() => setIsLoading(false))
    }else{
      getGym()
      .then( res => {
        setProducts(res.filter(products => products.category === category))
      })
      .catch( error => console.log(error))
      .finally(() => setIsLoading(false))
    }
  }, [category])

  console.log(category);
  const handleProductFiltered = ({filterState, handleFilterChange}) => (
    <div>
      <div>
        <h3 className='form'>BUSCAR PRODUCTO</h3>
        <input  type="text" value={filterState} onChange={handleFilterChange} />
      </div>
      <div>
        {isLoading ?
          <h2>Cargando</h2>
          :
          <>
            {filterState === ''

              ? <div className="item-list">
                {products.map((product) => (
                  <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img className="texto" src={product.img} alt="" />
                    <h3 className="texto" > {product.price}</h3>
                    <h5 className="texto" >{product.category}</h5>
                    <Link to={`/detail/${product.id}`}>
                      <button className='boton' >Comprar</button>
                    </Link>
                  </div>
                ))}
              </div>
              :
              products.filter(product => product.title.toLowerCase().includes(filterState.toLowerCase()))
                .map(product =>
                  <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img className="texto" src={product.img} alt="" />
                    <h3 className="texto" > {product.price}</h3>
                    <h5 className="texto" >{product.category}</h5>
                    <Link to={`/detail/${product.id}`}>
                      <button className='boton' >Comprar</button>
                    </Link>
                  </div>)
            }
          </>
        }
      </div>
    </div>

    
  )
  return (
    <div>
      <Filter>
          {handleProductFiltered}
      </Filter>
    </div>
  )
}

export default ItemListContainer