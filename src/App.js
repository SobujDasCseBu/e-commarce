import React, { useEffect, useState } from 'react'
//import Products from './Components/Products/Products'
import { Navbar, Products ,Cart } from './Components'
import {commerce} from './lib/Commmerce'

const App = () => {

 const [products, setProducts] = useState([])

 const [cart, setCart] = useState({})

 const fetchProducts = async() =>{
   const {data}= await commerce.products.list()
   setProducts(data)
 }

 const fetchCart = async() =>{
   setCart(await commerce.cart.retrieve())
 }

const handleAddToCart = async (productId, quantity) =>{
  const item = await commerce.cart.add(productId, quantity)

  setCart(item.cart)
}

 useEffect( ()=>{
    fetchProducts()
    fetchCart()
 },[])

 console.log(cart)

  return (
    <div>
      <Navbar totalItem ={cart.total_items} />
      <Cart cart ={cart} />
      <Products products={products} onAddToCart ={handleAddToCart} />
      <h3>Check github update</h3>
    </div>
  )
}

export default App

