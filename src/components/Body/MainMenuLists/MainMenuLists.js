import React, { Component } from "react";
import MainMenuData from "./MainMenuData";
import "./MainMenuLists.css";
import RESTRODISCHES from "./constants/mainMenuLists.option.js"
import Cart from "./Cart/Cart";
import { handleClick } from "./helpers/mainMenuLists.general";
// import { indian,chinese,italian } from "../../../redux/actions/productsActions";
import Menu from "./Menu";

class MainMenuLists extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    }
  }
  //  selectedDish= { name, price, description, pic_Id, id }

  dishClicked = (selectedDish) => {
    let newCopiedCart = [...(this.state.cart)]
    let cart = handleClick(selectedDish, newCopiedCart);
    this.setState({ cart: cart });
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
      <div>
      
      <div className="restrolists">
                <div className="restrolists-left">
        <Menu dishList={RESTRODISCHES}  mainMenuItems={this.mainMenuItems} />
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
      </div>
    );
  }
}

export default MainMenuLists;
