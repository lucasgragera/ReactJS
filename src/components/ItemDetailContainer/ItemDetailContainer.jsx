import React, { useEffect, useState } from 'react'
import Detail from '../pages/Detail'
import { useParams } from 'react-router-dom'
import { getGym } from '../lib/gym.requests'

const ItemDetailContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [producto, setProducto] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        getGym(pid)
        .then(resp => {
            console.log(resp);
            setProducto(resp);
          })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    
      }, [])

  return (
    <div>
      {isLoading ?
        <h2 className='charging2'>cargando...</h2>
      :
        <Detail producto={producto} />
      }
    </div>
  )
}

export default ItemDetailContainer





















// import React from 'react'

// const ItemDetailContainer = () => {

//     useEffect(() => {

//         getGym()
//             .then(res => {
//                 setIsLoading(false);
//                 setProducts(res)
//             }

//             )

//     }, []);

//   return (
//     <div>ItemDetailContainer</div>
//   )
// }

// export default ItemDetailContainer