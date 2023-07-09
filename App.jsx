import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainter from './components/ItemListContainer/ItemListContainer';

function App() {
 return (
  <div>
  <NavBar />
  <ItemListContainter 
  titulo='Bienvenido'
  />
  </div>
 )
}

export default App
