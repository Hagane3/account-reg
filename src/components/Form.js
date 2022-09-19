import React, { useState } from "react";

import classes from "./Form.module.css";

import FormInputs from "./FormInputs";

const Form = () => {
  const [userDetails, setUserDetails] = useState();

  console.log(userDetails);

  return (
    <div className={classes.form}>
      <div className={classes.labels}>
        <h2>START FOR FREE</h2>
        <h1>
          Create new account<span className={classes.dot}>.</span>
        </h1>
        <p>
          Already A Member?<a href="#login">Log In</a>
        </p>
      </div>
      <FormInputs userDetails={setUserDetails} />
    </div>
  );
};

export default Form;
