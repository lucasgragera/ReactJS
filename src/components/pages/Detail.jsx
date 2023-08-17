import React, { useState } from 'react'
import './Detail.css/'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'

export const Detail = ({ producto }) => {
  const [tieneCantidad, actualizarTieneCantidad] = useState(false)
  const [isCant, setIsCant] = useState(false)

  const { addToCart } = useCartContext

  const onAdd = (cantidad) => {
    addToCart({ ...producto, cantidad })
    setIsCant(true)
    actualizarTieneCantidad(true)
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
          <h6 className='stockdet'>{producto.stock} Unidades</h6>
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

{/* <div>
<>
  <div>
    <img className='detalle' src={producto.img} alt="" />
    <h2 className='detalle' >{producto.title}</h2>
    <h5 className='detalle' >{producto.description}</h5>
  </div>

  <div>
    {isCant ?
      <Link to='/cart'>Terminar compra</Link>
      :
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    }
  </div>
</>
</div>
)
} */}