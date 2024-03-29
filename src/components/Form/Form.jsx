import { useState } from "react"

const Form = () => {
  const [userData, setUserData] = useState( {name:"", lastName: ""} )

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(userData)
  }

const handleKey = ( event )=>{
    if(event.key !== " " ){
        console.log(event.key)   
    }else{
        event.preventDefault() 
    }
}

  return (
  <div>
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        name="name"
        value={userData.name}
        onChange={(event)=> setUserData( {...userData, name: event.target.value })}
        onKeyDown={handleKey}
      />
      <input
        type="text"
        placeholder="Ingrese su apellido"
        name="lastName"
        onChange={(event) => setUserData( {...userData, lastName: event.target.value} )}
        value={userData.lastName}
      />
      <button type="submit">Enviar</button>
    </form>
  </div>
)
}

export default Form
