import { memo } from "react"
import Item from "../components/Item/Item"


const ItemList = memo(
    ([productos]) => {
        console.log('ItemList')
        return (
            <div>
                {productos.map(producto => <Item key={producto.id} producto={producto} />)}
            </div>
        )
    }
)

export default ItemList