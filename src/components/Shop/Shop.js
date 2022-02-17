import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {

  const [products,setProducts]=useState([])
  const [cart,setCart]=useState([])
  const [displayProducts,setDisplayProducts]=useState([])


  useEffect(()=>{
    fetch('./products.JSON')
   .then(res=>res.json())
   .then(data=>{
     setProducts(data)
     setDisplayProducts(data)
  })
  },[])
  
  useEffect(()=>{
    const savedCart=getStoredCart();
    const refreshSavedCart=[];
    if(products.length){
      for(const key in savedCart){
        const addedProduct= products.find(product=> product.key === key)
        if(addedProduct){
          const quantity=savedCart[key];
          addedProduct.quantity=quantity;
          refreshSavedCart.push(addedProduct);
        }
    }   
    }
    setCart(refreshSavedCart)
  },[products])

  const handleAddToCart = product =>{
    let newCart=[...cart,product];
    setCart(newCart);
    addToDb(product.key)
  }

  const handleSearch = event =>{
   const searchText= event.target.value;
   const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
   console.log(matchedProducts.length);
   setDisplayProducts(matchedProducts);
  }

  return (
    <div>
      <div className='input-container'> 
         <input 
         type="text" 
         placeholder='Search your product'
         onChange={handleSearch}
         />   
      </div>
      <div className='shop-container'>
         <div className='product-container'>
           <h2>Products:{products.length}</h2>
        {
          displayProducts.map(product => <Product 
            key={product.key}
            product={product}
            handleAddToCart={handleAddToCart} 
            >            
            </Product>)
        }
         </div>
         <div className='cart-container' >
          <Cart cart={cart}></Cart>
         </div>
      </div>
    </div>
  );
};

export default Shop;