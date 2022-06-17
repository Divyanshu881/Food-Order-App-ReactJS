import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [isCheckout, setIscheckout] = useState(false);

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const orderHandler = () => {
    setIscheckout(true);
  };

  const submitOrderHandler = (userData) => {
    fetch(
      "https://food-order-app-87414-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: ctx.items,
        }),
      }
    ).then((response)=>{
      if(!response.ok)
      {
        console.log('Something went wrong');
      }
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          name={item.name}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const hasItems = ctx.items.length > 0 ? true : false;

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>₹{ctx.totalAmount.toFixed(2)}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </Modal>
  );
};
export default Cart;
