import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button style={{ backgroundColor: props.color }} type={props.type}>
      {props.label}
    </button>
  );
};

export default Button;
