import React, { useState } from 'react'
import './Detail.css/'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'

export const Detail = ({ producto }) => {
  const [isCant, setIsCant] = useState(false)

  const {addToCart, cartList} = useCartContext()

  const onAdd = (cantidad) => {
    addToCart( {...producto, cantidad} )
    setIsCant(true)

  }
  return (
    <div className='todito'>
      <div key={producto.id} className=''>
        <img className='fotodet' src={producto.img} alt="foto producto" />
      </div>
      <div className='detalles'>
        <div className='textos'>
            <h4 className='nombredet'>{producto.title}</h4>
            <h5 className='preciodet'>${producto.price}</h5>
            <h6 className='stockdet'>{producto.stock} Unidades Disponibles</h6>
        </div>
        {
            !isCant ?
              <div className='count'>
              <ItemCount onAdd={onAdd} />
              </div>
            :
              <>
                <div className='btnpetit'>
                  <Link to={'/'}>
                    <button className='btnpete'>Seguir Comprando</button>
                  </Link>
                  <Link to={'/cart'}>
                    <button className='btnpete'>Terminar Compra</button>
                  </Link>
                </div>
              </>
        }
      </div>
    </div>
  )
}

   

export default Detail