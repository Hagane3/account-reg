import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const [isTouched, setIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const inputValueHandler = (event) => {
    props.setValue(event.target.value);
  };

  const validityHandler = (event) => {
    setIsTouched(true);
    if (
      event.target.value.trim().length === 0 ||
      (event.target.type === "email" && !event.target.value.includes("@")) ||
      (event.target.type === "password" && event.target.value.length < 6)
    ) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
    }
  };

  // const isValidHandler = (event) => {
  //   if (event.target.value.trim().length === 0) {
  //     console.log("Input empty");
  //   } else if (
  //     event.target.type === "email" &&
  //     !event.target.value.includes("@")
  //   ) {
  //     console.log("Email should contain @");
  //   } else if (
  //     event.target.type === "password" &&
  //     event.target.value.length < 6
  //   ) {
  //     console.log("Password should have at least 6 characters");
  //   }
  // };

  return (
    <div
      className={classes.input}
      style={{
        border: `${!formIsValid && isTouched ? "2px solid red" : ""}`,
      }}
    >
      <label>{props.labelName}</label>
      <input
        type={
          props.labelName === "Password"
            ? "password"
            : "" || props.labelName === "Email"
            ? "email"
            : ""
        }
        onChange={inputValueHandler}
        onBlur={validityHandler}
        value={props.value}
      ></input>
    </div>
  );
};

export default Input;
