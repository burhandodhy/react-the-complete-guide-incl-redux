import React, { Fragment } from "react";
import Button from '../../components/UI/Button/Button'

const OrderSummary = (props) => {
  const summary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey} style={{textTransform: 'uppercase'}}>
        {igKey}: <span>{props.ingredients[igKey]}</span>
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your Order!</h3>
      <p>A delicious burger with following ingredients</p>
      <ul>{summary}</ul>
      <strong>Total Price: {props.price}</strong>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancelHandler}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continueHandler}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
