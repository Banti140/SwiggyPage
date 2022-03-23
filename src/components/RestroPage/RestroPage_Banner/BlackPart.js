import React, { Component } from "react";
import "./BlackPart.css";

export class RestroPageBanner extends Component {
  render() {
    return (
      <div class="restro-page-banner">
        <div className="banner-left">
          <img
            className="restro-pic-banner"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/y2y8vkvvgpdu4nkxx5uj"
          />
        </div>
        <div className="banner-center">
          <div className="banner-center-insider">
            <h1>Kitchens of Punjab</h1>
            <h2> Punjabi, North Indian </h2>
            <h2>Bilekahalli, BTM - Bangalore</h2>
            
          </div>
        </div>
        <div className="banner-right">
          Offers
          <div className="banner-offers">
            20% OFF | Use Code Party
            <br />
            30% off up to ₹150 on orders above ₹400 | Use code JUMBO
          </div>
        </div>
      </div>
    );
  }
}

export default RestroPageBanner;
