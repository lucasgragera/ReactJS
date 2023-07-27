let productos = [
  {
    id: 1,
    title: "Mancuerna 15kg",
    category: "Mancuernas",
    price: 200,
    description:
      "Lorem ipsum dolor sit amet consect",
    img: "https://http2.mlstatic.com/D_NQ_NP_987043-MLA70513077888_072023-O.webp",
  },
  {
    id: 2,
    title: "Mancuerna 10kg",
    category: "Mancuernas",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consect",
    img: "https://http2.mlstatic.com/D_NQ_NP_901968-MLA70510129348_072023-O.webp",
  },
  {
    id: 3,
    title: "Multi Fuerza",
    category: "Maquinas",
    price: 2000,
    description:
      "Lorem ipsum dolor sit amet consect",
    img: "https://http2.mlstatic.com/D_NQ_NP_864015-MLA54768416794_032023-O.webp"
  },
  {
    id: 4,
    title: "Banco Plano Reclinable",
    category: "Maquinas",
    price: 450,
    description:
      "Lorem ipsum dolor sit amet consect",
    img: "https://http2.mlstatic.com/D_NQ_NP_907478-MLA52993550561_122022-O.webp",
  },
  {
    id: 5,
    title: "Camilla Isquios",
    category: "Maquinas",
    price: 450,
    description:
      "Lorem ipsum dolor sit amet consect",
    img: "https://http2.mlstatic.com/D_NQ_NP_613062-MLA54982937062_042023-O.webp",
  },
  {
    id: 6,
    title: "Polea Multiuso",
    category: "Maquinas",
    price: 1000,
    description:
      "Lorem ipsum dolor sit amet consect",
    img: "https://http2.mlstatic.com/D_NQ_NP_708513-MLA32395205792_102019-O.webp",
  }
];

export const getGym = (id) => {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(
              !id
                  ? productos
                  : productos.find((producto) => producto.id === parseInt(id))
          );
      }, 1000);
  });
};

// export const getGym = () => {
//     return new Promise((res)=>{
//         setTimeout(()=>{ 
//             res(GYM)
//         },1000)
//     })
// }

// export const getGyms = () => {
//   //Las promesas reciben como parametro una funcion
//   //Esta funcion a su vez recibe como parametro resolve y rejected, con el fin de mandar un dato correcto o un error.
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(GYM[0]); //Se resuelve con el array con el libro de la posicion [0]
//     }, 1000);
//   });
// };