import React, { Component } from "react";
import MainMenuLists from "./RestroDetailsLists/MainMenuLists";
import BlackPart from "./RestroPage_Banner/BlackPart";

export class RestroPage extends Component {
  render() {
    return (
      <div className="restropage-parent">
        <BlackPart/>
        <MainMenuLists/>
      </div>
    );
  }
}

export default RestroPage;
