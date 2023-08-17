let productos = [
  {
    id: 1,
    title: "Mancuerna 15kg",
    category: "Mancuernas",
    price: 200,
    description:
      "2 mancuernas de 15kg",
    stock: 100,  
    img: "https://http2.mlstatic.com/D_NQ_NP_987043-MLA70513077888_072023-O.webp",
  },
  {
    id: 2,
    title: "Mancuerna 10kg",
    category: "Mancuernas",
    price: 150,
    description:
      "2 mancuernas de 10kg",
    stock: 100, 
    img: "https://http2.mlstatic.com/D_NQ_NP_901968-MLA70510129348_072023-O.webp",
  },
  {
    id: 3,
    title: "Multi Fuerza",
    category: "Maquinas",
    price: 2000,
    description:
      "1 maquina multi fuerza",
    stock: 100,   
    img: "https://http2.mlstatic.com/D_NQ_NP_864015-MLA54768416794_032023-O.webp"
  },
  {
    id: 4,
    title: "Banco Plano Reclinable",
    category: "Maquinas",
    price: 450,
    description:
      "1 banco plano reclinable",
    stock: 100,  
    img: "https://http2.mlstatic.com/D_NQ_NP_907478-MLA52993550561_122022-O.webp",
  },
  {
    id: 5,
    title: "Camilla Isquios",
    category: "Maquinas",
    price: 450,
    description:
      "1 camilla de isquios",
    stock: 100,
    img: "https://http2.mlstatic.com/D_NQ_NP_613062-MLA54982937062_042023-O.webp",
  },
  {
    id: 6,
    title: "Polea Multiuso",
    category: "Maquinas",
    price: 1000,
    description:
      "1 polea multiuso",
    stock: 100,  
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
