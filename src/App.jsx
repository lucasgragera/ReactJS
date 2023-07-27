import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainter from './components/ItemListContainer/ItemListContainer';
// import { Home } from "./components/pages/Home";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainter />}/>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App    