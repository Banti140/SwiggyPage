import React, { Component } from "react";
import MainMenuData from "./MainMenuData";
import "./MainMenuLists.css";
import RESTRODISCHES from "./constants/RESTRODISCHES.Option.js"
import Cart from "./Cart/Cart";
import { handleClickHelper } from "./handleClickHelper";

class MainMenuLists extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    }
  }
  //  constDetails= { name, price, description, pic_Id, id }

  dishClicked = (constDetails) => {
    let newCopiedCart = [...(this.state.cart)]
    let Cart = handleClickHelper.handleClick(constDetails, newCopiedCart);
    this.setState({ cart: Cart });
  };

  mainMenuItems = (dish) => {
    return (
      <MainMenuData
        id={dish.details.id}
        name={dish.details.name}
        price={dish.details.price}
        description={dish.details.description}
        pic_Id={dish.details.pic_Id}
        dishClicked={this.dishClicked}
        cart={this.state.cart}
      />
    );
  }

  render() {
    return (
      <div className="restrolists">
        <div className="restrolists-left">
          Recommended
          <div className="recommendation">
            platter<br></br>
            Appetizer <br></br>
            Family Bolinge Packs <br></br>
            Dessert & Beverages <br></br>
            Accompaniments
          </div>
        </div>
        <div className="restrolists-main">
          <div className="recomText" >
            Recommended
          </div>
          {RESTRODISCHES.map(this.mainMenuItems)}
        </div>
        <div className="restrolists-right">
          <Cart cartDetails={this.state.cart} />
        </div>
      </div>
    );
  }
}


export default MainMenuLists;
