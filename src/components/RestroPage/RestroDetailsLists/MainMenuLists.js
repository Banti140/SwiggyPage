import MainMenuData from "./MainMenuData";
import "./MainMenuLists.css";
import RESTRODISCHES from "./Constants/RESTRODISCHES.js"

  function MainMenuLists() {
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
        <div className="restrolists-main">
          <div className="recomText" >
            Recommended
          </div>
          {RESTRODISCHES.map((dish) => {
            return (
              <MainMenuData key={dish.id} Name={dish.Name} Price={dish.Price} Description={dish.Description} Pic_Id={dish.Pic_Id} />
            );
          })}
        </div>
      </div>
    );
  }


export default MainMenuLists;
