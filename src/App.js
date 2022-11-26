import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar"


function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido"} />
    </div>
  );
  
}

export default App;
