import React, { Component } from "react";
import "./Cart.css";
import Button from "@material-ui/core/Button";
import RESTRODISCHES from "../constants/mainMenuLists.option";

class Cart extends Component {

  constructor() {
    super();
    this.printCartedItem = this.printCartedItem.bind(this);
  }

  findDishById(dish) {
    return (dishInList) => {
      return (dishInList.id === dish.id);
    }
  }

  printCartedItem(dish) {
    let cartDish = (RESTRODISCHES.find(this.findDishById(dish)));
    return (
      <div>
        <br />
        <li>{`${dish.quantity}  ${cartDish.details.name}`}</li>
        <img className="Cart-pic" src={cartDish.details.pic_Id} />
      </div>
    );
  }

  getTotal(cartDetails) {
    let totalAmount = 0;

    cartDetails.forEach((cartItem) => {
      let dish = (RESTRODISCHES.find(this.findDishById(cartItem)));
      totalAmount += parseFloat(cartItem.quantity) * parseFloat(dish.details.price);
    });
    return totalAmount;
  }

  render() {
    const { cartDetails } = this.props;
    let totalAmount = this.getTotal(cartDetails);

    return <div className="cart">
      <h1>Cart</h1>
      <p>from Kitchens of Punjab</p>

      {cartDetails.map(this.printCartedItem)}

      <p> Total :  {totalAmount}Rs</p>
    </div>
  }
}

export default Cart;
