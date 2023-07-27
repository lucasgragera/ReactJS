import React from 'react'

const Detail = ({producto}) => {
  return (
    <div>
      <img src={producto.img} alt="" />
      <h2>{producto.title}</h2>
      <h5>{producto.description}</h5>
    </div>
  )
}

export default Detail


































// import { useEffect, useState } from "react";
// import { getGyms } from "../lib/gym.requests";

// export const Detail = () => {
//   const [gyms, setGyms] = useState({});

//   useEffect(() => {
//     getGyms().then((res) => {
//       setGyms(res);
//     });

//   }, []);

//   return (
//     <div className="container">
//       <div className="detail">
//         <div className="detail__img">
//           <img src={gyms.img} />
//         </div>
//         <div className="detail__info">
//           <span className="detail__info-title">{gyms.title} </span>

//           <p className="detail__info-description">{gyms.description}</p>

//           <span className="detail__info-price">
//             $
//             {(gyms.price || 0).toLocaleString("es-CO", {
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2,
//             })}
//           </span>

//         </div>
//       </div>
//     </div>
//   );
// };
