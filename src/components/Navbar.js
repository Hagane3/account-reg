import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.brand}>
        <span className={classes.dot}></span>
        <h1>Account registration</h1>
      </div>
    </nav>
  );
};

export default Navbar;
