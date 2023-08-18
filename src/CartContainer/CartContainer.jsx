import React, { useState } from "react";
import { useCartContext } from "../context/cartContext";
import { getDoc, updateDoc, addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { ItemCount } from "../components/ItemCount/ItemCount";

export const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    });
    const { cartList, vaciarCarrito, precioTotal, eliminarProducto, deleteProd } = useCartContext();

    const verificarEmail = () => {
        const { email, email2 } = dataForm;
        return email !== email2;
    };

    const generarOrden = (evt) => {
        evt.preventDefault();
        if (verificarEmail()) {
            alert('El email debe ser el mismo');
        } else {
            const order = {
                buyer: dataForm,
                items: cartList.map(({ title, id, price, cantidad }) => ({ id, title, price, cantidad })),
                total: precioTotal()
            };
    
            const dbFirestore = getFirestore();
            const ordersCollection = collection(dbFirestore, 'orders');
    
            addDoc(ordersCollection, order)
                .then(resp => alert(`El ID de tu compra es: ${resp.id}`))
                .catch(err => console.log(err))
                .finally(() => {
                    setDataForm({
                        name: '',
                        phone: '',
                        email: '',
                        email2: ''
                    });
                    vaciarCarrito();
    
                    // Actualizar el stock para cada producto
                    cartList.forEach(({ id, cantidad }) => {
                        const queryDoc = doc(dbFirestore, 'productos', id);
                        getDoc(queryDoc)
                            .then((docSnap) => {
                                if (docSnap.exists()) {
                                    const prod = docSnap.data();
                                    updateDoc(queryDoc, {
                                        stock: prod.stock - cantidad
                                    })
                                    .then(() => console.log('Stock actualizado para el producto:', prod.title))
                                    .catch(err => console.log('Error al actualizar el stock:', err));
                                }
                            })
                            .catch(err => console.log('Error al obtener el producto:', err));
                    });
                });
        }
    };

    const handleOnChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm(prevDataForm => ({
            ...prevDataForm,
            [name]: value
        }));
    };
    console.log(cartList)

    return (
        <div>
            {cartList.map(prod => (
                <div className="orden" key={prod.id}>
                    <img className="w" src={prod.img} alt="imagen" />
                    <label>Precio {prod.price} - Cantidad : {prod.cantidad} - Producto : {prod.title}</label>
                    <button onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                </div>
            ))}
            <h2>Precio Total: {precioTotal()}</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>

            <div className="form">
            <form onSubmit={generarOrden}>
                <input
                    type="text"
                    name="name"
                    onChange={handleOnChange}
                    value={dataForm.name}
                    placeholder="Nombre"
                    required
                />
                <input
                    type="text"
                    name="phone"
                    onChange={handleOnChange}
                    value={dataForm.phone}
                    placeholder="Telefono"
                    required
                />
                <input
                    type="text"
                    name="email"
                    onChange={handleOnChange}
                    value={dataForm.email}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    name="email2"
                    onChange={handleOnChange}
                    value={dataForm.email2}
                    placeholder="Email Confirmacion"
                    required
                />
                <button type="submit">Generar Orden</button>
            </form>
            </div>
        </div>
    );
};

export default CartContainer