import React, { useState } from "react";

import classes from "./FormInputs.module.css";

import Input from "./Input";
import Button from "./Button";

const FormInputs = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetailsHandler = (event) => {
    event.preventDefault();
    const isFormValid =
      firstName && lastName && email && password.length && password.length >= 6;
    if (isFormValid) {
      props.userDetails({
        firstName,
        lastName,
        email,
        password,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      alert("Creating account process was finished successfully");
    } else {
      console.log("Form isn't valid");
    }
  };

  return (
    <form
      className={classes.inputs}
      onSubmit={userDetailsHandler}
      autoComplete="off"
    >
      <Input labelName="First name" setValue={setFirstName} value={firstName} />
      <Input labelName="Last name" setValue={setLastName} value={lastName} />
      <Input labelName="Email" setValue={setEmail} value={email} />
      <Input labelName="Password" setValue={setPassword} value={password} />
      <div className={classes.buttons}>
        <Button color="#555b69" label="Change method" type="button" />
        <Button color="#1d90f5" label="Create account" type="submit" />
      </div>
    </form>
  );
};

export default FormInputs;
