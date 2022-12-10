import {useState, useEffect} from 'react';
import Counter from "../Counter/Counter";
import "./ItemListContainer.css";
import {products} from "../../productsMock";
import ProductsCard from "../ProductsCard/ProductsCard";
// import CustomButton from "../CustomButton/CustomButton"

const ItemListContainer = ( { greeting } ) => {

  const [isDark, setIsDark] = useState(false)
  const [num, setNum] = useState(0)

  const [items, setItems] = useState([])

  const tooggleMode = () => {
    setIsDark( !isDark )
  }

//  useEffect(()=>{
//    console.log("Hola dentro del primer efecto");
//  }) // SIN ARREGLO DE DEPENDENCIA
//
//  useEffect(()=>{
//    console.log("Hola desde el efecto con array de dependencia vacio");
//  }, []) // ARREGLO DE DEPENDENCIA VACIO
//
//  useEffect(()=>{
//    console.log("Hola desde el efecto con array de dependencia a la escucha de NUM");
//  }, [ num ]) // ARREGLO DE DEPENDENCIA A LA ESCUCHA DE UNA VARIABLE

  const onAdd = () => {
    console.log("hola");
  }

useEffect( () => {
  const task = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })

task
  .then( (res) => {setItems(res) } )
  .catch( (err) => {console.log(err) } )
}, [] )

console.log(items);

  return (
    <div className={ isDark ? "dark" : "light"}>
        {
          items.map((element) => {
            return (
              <ProductsCard key={element.name} element={element} />
            );
          })
        }
    </div>
  )
}

export default ItemListContainer