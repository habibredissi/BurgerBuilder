import React, { Component } from "react";
import Aux from "../../hoc/ReactAux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerOpenedHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !this.state.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar openedDrawer={this.sideDrawerOpenedHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
