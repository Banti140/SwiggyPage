import React, { Component } from "react";
// import MainMenuData from "./MainMenuData";
import "./RestroDetailsLists.css";

class RestroDetailsLists extends Component {
  constructor() {
    super();

    this.state = {
      restro_dishes: [
        {
          details: {
            Name: "Veg Platter",
            Description:
              "An authentic veg platter with 3 pieces of Paneer Achari, 3 pieces of Malai Chaap",
            Price: "90Rs",
            Pic_Id:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/wlvkgf6axda8thsttpoq",
          },
        },
        {
          details: {
            Name: "Non Veg Platter ",
            Description:
              "3 pieces of Dhaniya Chicken, 3 pieces of Tawa Chicken and 3 pieces of Chicken Kebab",
            Price: "279Rs",
            Pic_Id:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/l7vj46vepsesbnjmx3ur",
          },
        },
        {
          details: {
            Name: "Mixed Platter",
            Description:
              "Succulent chicken marinated & flavoured with fresh coriander, grilled to perfection",
            Price: "249Rs",
            Pic_Id:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u",
          },
        },
        {
          details: {
            Name: "Shahi Chicken Tikka Patiala",
            Description: "Spicy chicken Tikka prepped Patiala-style.",
            Price: "249Rs",
            Pic_Id:
              " https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u",
          },
        },
        {
          details: {
            Name: "Half Tandoori Chicken - Bathinda Style",
            Description: "Bathinda-style spicy-charred Tandoori chicken.",
            Price: "299Rs",
            Pic_Id:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vgkmyncx7yxcug1hvf1u",
          },
        },
        // {
        //   details: {
        //     Name: "Methi Chicken Tikka Barnala",
        //     Description:
        //       "Barnala-style tender chicken Tikka flavoured with aromatic Methi.",
        //     Price: "₹249",
        //     Pic_Id:
        //       "https://media.glamour.com/photos/5f0ded3c6ebfe4554e35b781/master/w_2160,h_1500,c_limit/Freshly-MealGroup_2160x1500.jpg",
        //   },
        // },
      ],
    };
  }
  
  render() {
    return (
      <div className="restrolists">
        <div className="restrolists-left">Recommended
        <div className="recommendation">
          platter<br></br>
          Appetizer <br></br>
          Family Bolinge Packs <br></br>
          Dessert & Beverages <br></br>
          Accompaniments
        </div>
        </div>
        {/* <div className="restrolists-main">
          <div className="search-and-filter" >
            
            
            Recommended
          </div>
          {this.state.restro_dishes.map((dish) => {
            return (
              <MainMenuData details={dish.details}/>
            );
          })}
        </div> */}
        <div className="restrolists-right">
        </div>
      </div>
    );
  }
}

export default RestroDetailsLists;
