import { useState, useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 6;

  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    pin: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const pinInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const entredName = nameInputRef.current.value;
    const entredStreet = streetInputRef.current.value;
    const entredPin = pinInputRef.current.value;
    const entredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(entredName);
    const streetIsValid = !isEmpty(entredStreet);
    const cityIsValid = !isEmpty(entredCity);
    const pinIsValid = isFiveChars(entredPin);

    setFormInputValid({
      name: nameIsValid,
      street: streetIsValid,
      pin: pinIsValid,
      city: cityIsValid,
    });

    const isFormValid =
      nameIsValid && streetIsValid && cityIsValid && pinIsValid;

    if (!isFormValid) {
      return;
    }
    props.onConfirm({
        name: entredName,
        street: entredStreet,
        postalCode: entredPin,
        city: entredCity
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputValid.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputValid.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputValid.pin ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputValid.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValid.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValid.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={pinInputRef} type="text" id="postal" />
        {!formInputValid.pin && (
          <p>Please enter a valid postal code (6 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValid.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} >Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
