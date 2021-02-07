import React from 'react'

import classes from './Backdrop.module.css'

const Backdrop = (props) => (props.show == true ? <div className={classes.Backdrop} onClick={props.clickHandler}></div> : null);

export  default Backdrop