import React, { useState } from "react";
import { useCartContext } from "../context/cartContext";
import { updateDoc, addDoc, collection, doc, getFirestore } from "firebase/firestore";

export const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
        email2: ''
    });
    const { cartList, vaciarCarrito, precioTotal } = useCartContext();

    const verificarEmail = () => {
        const { email, email2 } = dataForm;
        return email !== email2;
    };

    const generarOrden = (evt) => {
        evt.preventDefault();
        if (verificarEmail()) {
            alert('El email tiene que ser el mismo');
        } else {
            const order = {
                buyer: dataForm,
                items: cartList.map(({ title, id, price, cantidad }) => ({ id, title, price, cantidad })),
                total: precioTotal()
            };

            const dbFirestore = getFirestore();
            const ordersCollection = collection(dbFirestore, 'orders');

            addDoc(ordersCollection, order)
                .then(resp => alert(`El id de tu compra es: ${resp.id}`))
                .catch(err => console.log(err))
                .finally(() => {
                    setDataForm({
                        name: '',
                        phone: '',
                        email: '',
                        email2: ''
                    });
                    vaciarCarrito();
                });

            // Update stock for each product (you'll need to modify this part according
            // to your structure)
            cartList.forEach(({ id }) => {
                const queryDoc = doc(dbFirestore, 'productos', id);
                updateDoc(queryDoc, {
                    stock: -1
                })
                .finally(() => console.log('Finalizó la actualización'));
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

    return (
        <div>
            {cartList.map(prod => (
                <div key={prod.id}>
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
    );
};

export default CartContainer