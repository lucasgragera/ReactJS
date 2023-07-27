// import { useState, useEffect } from "react";
// import { getGym } from "../lib/gym.requests";
// import ItemListContainter from "../ItemListContainer/ItemListContainer";

// export const Home = () => {
//   const [products, setProducts] = useState([]); //Importante iniciar en array para que no falle el metodo map
//   const [isLoading, setIsLoading] = useState(true);
//   //Poner en efectos peticiones o cosas asincronas
//   useEffect(() => {

//    getGym() //Se simula una peticion
//     .then(res => {
//       setIsLoading(false); //Cuando esta se resuelve cambia al estado para dejar de cargar
//       setProducts(res)} //Ademas setea productos con lo que resolvio la promesa (no hay catch porque estamos segurods de que siempre hay algo)
      
//       ) 

//   }, []);



//   return (
//     <div>
//       <div className="container">
//         Hola
//       </div>
//     </div>
//   );
// };
