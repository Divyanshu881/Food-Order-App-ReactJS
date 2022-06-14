import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: "number",
          min: "0",
          max: "5",
          step: '1',
          defaultValue: "0",
          readOnly:true,
  
        }}
      />
      

      <button >+Add</button>
      
    </form>
  );
};

export default MealItemForm;
