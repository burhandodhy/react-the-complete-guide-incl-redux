import React, { Fragment, useState } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerHandler = () => {
    setShowSideDrawer(false);
    console.log(showSideDrawer);
  };

  const toogleDrawerHandler = () => {
    setShowSideDrawer( ! showSideDrawer )
  }
  return (
    <Fragment>
      <Toolbar clicked={toogleDrawerHandler} />
      <SideDrawer show={showSideDrawer} closed={sideDrawerHandler} />
      <main className={styles.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
