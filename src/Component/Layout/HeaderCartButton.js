import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [btmBump, setBtnBump] = useState(false);
  const totalCartItem = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const style = `${classes.button} ${btmBump ? classes.bump : ""}`;
  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);
  return (
    <button type={props.type} className={style} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
