import React from 'react';

const Cart = (props) => {
  const {cart}=props;
  let total=0;
  let quantity=0;
  let shipping=15;
  for(const product of cart){
    if(!product.quantity){
      product.quantity=1
    }
    total= total + product.price * product.quantity;
    quantity = quantity + product.quantity;
    
  }
  let tax= total > 0 ? (total*.10) : 0;
  let grandTotal = total + tax + shipping;
  return (
    <div>
     <h2>Order Summury</h2>
     <h3>Items ordered: {quantity}</h3>
     <h3>SubTotal : {total.toFixed(2)}</h3>
     <h3>Tax : {tax.toFixed(2)}</h3>
     <h3>Shipping: {shipping}</h3>
     <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;