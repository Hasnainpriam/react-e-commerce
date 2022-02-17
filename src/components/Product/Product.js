import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />

  const {name,img,price,shipping,stock,seller}=props.product;
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className='product-details'>
        <h3>{name}</h3>
        <h2>Price: {price}</h2>
        <p>Shipping: {shipping}</p>
        <p>Seller: {seller}</p>
        <p>We have {stock} pieces in stock</p>
        <button 
        onClick={()=>{props.handleAddToCart(props.product)}}
        className='button-regular'
        >{element} Add to cart</button>
      </div>
    </div>
  );
};

export default Product;