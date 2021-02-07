import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";

function Burger(props) {

  const ingredients = props.ingredients;
  let burgerIngredients = Object.keys( ingredients).map((ig_key) => {
   return [...Array(ingredients[ig_key])].map( (_, i) => <BurgerIngredients type={ig_key} key={ig_key+ i} /> );
  }).reduce((preVal,currVal) => {
    return preVal.concat(currVal)
  }, []);

  if (burgerIngredients.length === 0){
    burgerIngredients = <p>Please Add Ingredients!</p>;
  }
    return (
      <div className={classes.Burger}>
        <BurgerIngredients type="bread-top" />
        {burgerIngredients}
        <BurgerIngredients type="bread-bottom" />
      </div>
    );
}

export default Burger;
