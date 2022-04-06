import React, { Component } from "react";
import "./MainMenuData.css";
import Button from "@material-ui/core/Button";
// import Cart from "./Cart/Cart";

class MainMenuData extends Component {

  handleClick = () => {
    const { name, price, description, pic_Id, dishClicked, id } = this.props;
    return dishClicked({ name, price, description, pic_Id, id });
  }

  render() {
    const { name, price, description, pic_Id } = this.props;
    return (<div className="restrodetaillist">
      <div className="restrodetaillist-info">
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
      <div className="restrodetaillist-image">
        <img className="dish-pic" src={pic_Id} />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          Add
        </Button>
      </div>
    </div>)
  }
}

export default MainMenuData;
