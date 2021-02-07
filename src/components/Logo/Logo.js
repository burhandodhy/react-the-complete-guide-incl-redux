import React from "react";
import logo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="My Burger" />
    </div>
  );
};

export default Logo;
