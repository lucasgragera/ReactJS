import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './CartContainer/CartContainer'

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainter />} />
            <Route path='/categoria/:category' element={<ItemListContainter />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/cart' element={<CartContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  )
}

export default App    