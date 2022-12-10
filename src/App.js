
import ItemDetailContainer from "./components/ItemsDetailContainer/ItemsDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  //CREO EL ENRUTAMIENTO

  return (
    <BrowserRouter>
      <NavBar />
    
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>

      <Route path="/Category/:CategoryName" element={<ItemListContainer/>}/>

      <Route path="/Category" element={<ItemListContainer/>}/>

      <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />

      <Route path="/Cart" element={<h3>Carrito de compras</h3>} />
      
      <Route path="*" element={<h1>Lo siento, esta URL n existe.</h1>} />
    </Routes>
    
    </BrowserRouter>
  );
  
}

export default App;