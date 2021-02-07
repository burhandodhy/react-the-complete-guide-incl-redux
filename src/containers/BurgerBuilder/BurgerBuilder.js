import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  meat: 0.4,
  cheese: 0.2,
  salad: 0.1,
};

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({ meat: 0, cheese: 0, salad: 0 });
  const [price, setPrice] = useState(0);
  const [purchasable, setPurchasable] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const addIngredientHandler = (key) => {
    let oldVal = ingredients[key];
    let newVal = oldVal + 1;
    let newIngredients = { ...ingredients };
    newIngredients[key] = newVal;
    setIngredients(newIngredients);

    let oldPrice = price;
    let newPrice = oldPrice + INGREDIENTS_PRICE[key];
    setPrice(newPrice);
    updatePurchaseState(newIngredients);
  };

  const removeIngredientHandler = (key) => {
    let oldVal = ingredients[key];
    if (oldVal <= 0) {
      return;
    }
    let newVal = oldVal - 1;
    let newIngredients = { ...ingredients };
    newIngredients[key] = newVal;
    setIngredients(newIngredients);

    let oldPrice = price;
    let newPrice = oldPrice - INGREDIENTS_PRICE[key];
    setPrice(newPrice);
    updatePurchaseState(newIngredients);
  };

  const disabledInfo = Object.fromEntries(Object.entries(ingredients).map(([k, v]) => [k, v <= 0]));

  const updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);
    setPurchasable(sum > 0);
  };

  const isPurchasingHandler = () => {
    setIsPurchasing(true);
  };

  const cancelPurchaseHandler = () => {
    setIsPurchasing(false);
  };

  const continuePurchaseHandler = () => {
    console.log("Success");
  };

  return (
    <Fragment>
      <Modal show={isPurchasing} modelClose={cancelPurchaseHandler}>
        <OrderSummary
          ingredients={ingredients}
          cancelHandler={props.cancelPurchaseHandler}
          continueHandler={props.continuePurchaseHandler}
          price={price}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredient={addIngredientHandler}
        removeIngredient={removeIngredientHandler}
        disabledInfo={disabledInfo}
        price={price}
        purchasable={purchasable}
        purchasing={isPurchasingHandler}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
