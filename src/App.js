import Counter from "./components/Counter/Counter";
import CustomButton from "./components/CustomButton/CustomButton";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar"


function App() {

  return (
    <div>
      <Navbar />
      <Counter/>
      <ItemListContainer greeting={"Bienvenido"} />

    </div>
  );
  
}

export default App;
