import React, { useEffect, useState } from 'react';
import Detail from '../pages/Detail';
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [producto, setProducto] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, 'productos', pid);
    getDoc(queryDoc)
      .then((resp) => {
        setProducto({ id: resp.id, ...resp.data() });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isLoading ? (
        <h2 className='charging2'>cargando...</h2>
      ) : (
        <Detail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;





