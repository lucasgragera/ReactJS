import { useState } from "react"
import { useCartContext } from "../context/cartContext"
import {updateDoc, addDoc, collection, getFirestore} from "firebase/firestore"

export const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name:'',
        phone:'',
        email:'',
        email2:''
    })
    const { cartList, vaciarCarrito, precioTotal } = useCartContext()

    const generarOrden = ()=> {
        evt.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(({title, id, price, cantidad}) => ({id, title, price, cantidad}))
        order.total = precioTotal()

        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')
        
        addDoc(ordersCollection, order)
        .then(resp => console.log(resp))

        
        const queryDoc = doc(dbFirestore, 'productos', '')
        updateDoc(queryDoc, {
            stock: -1
        })
        .finally(() => 'finalizo la actualizacion')
    }
   const handleOnChange = (evt)=>{
        console.log('nombre del input', evt.target.name)
        console.log('nombre del input', evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
   }

    return (
        <div>
            {cartList.map(prod => (
                <div>
                    <img className="w" src={prod.foto} alt="imagen" />
                    <label>Precio {prod.precio} - Cantidad : {prod.cantidad}</label>
                    <button>Eliminar</button>
                </div>
            ))}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            
            <form onSubmit={generarOrden}>
                <input 
                    type="text" 
                    name="name" 
                    onChange={()=>{}}
                    value={dataForm.name} 
                    placeholder="ingrese el nombre"
                    />
                <input 
                    type="text" 
                    name="phone" 
                    onChange={()=>{}}
                    value={dataForm.phone} 
                    placeholder="ingrese el telefono"
                    />
                <input 
                    type="text" 
                    name="email" 
                    onChange={()=>{}}
                    value={dataForm.email} 
                    placeholder="ingrese el mail"
                    />
                <input 
                    type="text" 
                    name="email" 
                    onChange={()=>{}}
                    value={dataForm.email2} 
                    placeholder="ingrese nuevamente el mail"
                    />
                <button>Generar Orden</button>
            </form>
        </div>
    )
}  