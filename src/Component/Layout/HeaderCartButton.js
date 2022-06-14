import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const totalCartItem = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      type={props.type}
      className={classes.button}
      onClick={props.onClick}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
