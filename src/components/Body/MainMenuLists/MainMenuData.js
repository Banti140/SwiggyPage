import React, { Component } from "react";
import "./MainMenuData.css";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';





class MainMenuData extends Component {

  handleClick = () => {
    const { dishClicked, id } = this.props;
    return dishClicked({ id });
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

MainMenuData.defaultProps = {
  name: "",
  price: "",
  description: "",
  pic_Id: "https://res.cloudinary.com/swiggy/image/upload/portal/c/favicon-96x96.png"
}

MainMenuData.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  pic_Id: PropTypes.string
}

export default MainMenuData;
