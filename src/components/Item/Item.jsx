import { memo } from "react";
import "./Item.css";

const Item = memo(
  ({
    img, 
    category,
    title,
    price
  }) => {
    return (
      <div>
        <div className="item">
          <div className="item__img">
            <img src={img} />
          </div>
          <div className="item__content">
            <div className="item__content-info">
              <span className="item__content-category">{category}</span>
              <span className="item__content-title">{title}</span>
            </div>
            <span className="item__content-price">${price}</span>
          </div>
        </div>
        <div>
          <link to={'/component/pages/detail.jsx/${producto.id'}>
            <button>Detalle</button>
          </link>
        </div>
      </div>
    )
  }
)

export default Item