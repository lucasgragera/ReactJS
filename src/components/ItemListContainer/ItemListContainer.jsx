import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from "react";
import Filter from '../Filter/Filter'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [producto, setProductos] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams()

  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')


    if (!category) {
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    } else {
      const queryCollectionFiltered = query(
        queryCollection,
        where('category', '==', category),

      )

      getDocs(queryCollectionFiltered)
        .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }
  }, [category])



  const handleProductFiltered = ({ filterState, handleFilterChange }) => (
    <div>
      <div>
        <h3 className='form'>BUSCAR PRODUCTO</h3>
        <input className='input' type="text" value={filterState} onChange={handleFilterChange} />
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
                    <div className='prods'>
                      <h2>{product.title}</h2>
                      <img className="img" src={product.img} alt="" />
                      <h3 className="texto" > ${product.price}</h3>
                      <h5 className="texto" >{product.category}</h5>
                      <div className='boton'>
                        <Link to={`/detail/${product.id}`}>
                          <button >Comprar</button>
                        </Link>
                      </div>
                    </div>
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