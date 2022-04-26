import React, { Component } from "react";
import "./Cart.css";
import { Link } from 'react-router-dom'
import RESTRODISCHES from "../constants/mainMenuLists.option";
// import { useSelector } from "react-redux";
import {connect} from "react-redux";
import { buyItem } from "../../../../redux/actions/productsActions";
// import Thankyou from "../../../../ThankYou/Thankyou";

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


   DisplayMessage(){
    // const message=buyItem()
    // alert(message.payload);
    // console.log(this.props);
    // const {buyItem}=this.props;
    // console.log(this.props.buyItem);
    buyItem();
  }

  render() {
    const { cartDetails } = this.props;
    let totalAmount = this.getTotal(cartDetails);
    //  console.log(this.props.buyItem());
   
    return <div className="cart">
      <h1>Cart</h1>
      <p>from Kitchens of Punjab</p>

      {cartDetails.map(this.printCartedItem)}

      <p> Total :  {totalAmount}Rs</p>
      
      <Link to='/thankYou'> 
      <button className="btn-checkout" >Move to Buy</button>
      </Link>
    </div>
  }
}

// const mapDispatchToProps={
//   buyItem,
// };

// // const mapStateToProps=(state)=>({
// //   value:state.value,
// // })

// export default connect(null, mapDispatchToProps)(Cart)


export default Cart;
