import React, { useState, useEffect } from 'react'
import {products} from "../../productsMock"
import { useParams } from "react-router-dom"

const ItemsDetailContainer = () => {

  const [product, setProduct] = useState({})

  const {id} = useParams()

  useEffect(()=>{
    const productSelected = products.find( producto=> producto.id === parseInt(id))
    setProduct(productSelected)
  }, [id])

  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <h1>{product.description}</h1>
    </div>
  )
}

export default ItemsDetailContainer