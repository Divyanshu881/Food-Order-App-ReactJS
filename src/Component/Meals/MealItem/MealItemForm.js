import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const entredAmount = amountInputRef.current.value;
    const numberEntredAmount = +entredAmount;

    if (
      entredAmount.trim().length === 0 ||
      numberEntredAmount < 0 ||
      numberEntredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(numberEntredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "0",
          // readOnly: true,
        }}
      />

      <button>+Add</button>
      {!amountIsValid && <p>Enter the valid amount between 0-5</p>}
    </form>
  );
};

export default MealItemForm;
