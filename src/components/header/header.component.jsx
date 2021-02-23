import React from "react";
import DenseAppBar from "./app-bar/app.bar.component";

class Header extends React.Component {
  render() {
    return (
      <div id="app-body">
        <DenseAppBar />
      </div>
    );
  }
}

export default Header;
