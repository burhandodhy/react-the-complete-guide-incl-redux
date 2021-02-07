import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from "./BuildControls.module.css";

const BuildControls = (props) => {

  const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {control.map((ctrl) => (
        <BuildControl
          label={ctrl.label}
          key={ctrl.label}
          added={() => props.addIngredient(ctrl.type)}
          removed={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabledInfo[ctrl.type]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchasing}>
        ORDER NOW
      </button>
    </div>
  );
}

export default BuildControls
