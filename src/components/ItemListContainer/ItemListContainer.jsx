import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { collection, doc, getDoc, getDocs, getFirestore, query,  } from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import { getGym } from '../lib/gym.requests';
import Filter from '../Filter/Filter'

const ItemListContainer = () => {

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')

    // const queryCollectionFiltered = query(queryCollection, where('category', '==', category))

  //   getDocs(queryCollectionFiltered)
  //     .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
  //     .catch(error => console.log(error))
  //     .finally(() => setIsLoading(false))
  // 
}, []
  )

  const [products, setProducts] = useState([]);
  const [producto, setProductos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')

    if (category) {
      const queryCollectionFiltered = query(queryCollection, where('category', '==', category))
      getDocs(queryCollectionFiltered)
        .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    } else {
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }
  }, [category])

  const handleProductFiltered = ({ filterState, handleFilterChange }) => (
    <div>
      <div>
        <h3 className='form'>BUSCAR PRODUCTO</h3>
        <input type="text" value={filterState} onChange={handleFilterChange} />
      </div>
      <div>
        {isLoading ?
            <h2>CARGANDO</h2>
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