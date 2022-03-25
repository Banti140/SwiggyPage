import React from "react";
import "./MainMenuData.css";
import Button from "@material-ui/core/Button";

function RestroDetailList({ id, Name,Price,Description,Pic_Id}) {
  return (
    <div className="restrodetaillist">
      <div className="restrodetaillist-info">
        <p>{Name}</p>
        <p>{Price}</p>
        <p>{Description}</p>
      </div>
      <div className="restrodetaillist-image">
        <img className="dish-pic" src={Pic_Id} alt="Image" />
        <Button
          variant="contained"
          color="tertiary"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default RestroDetailList;
