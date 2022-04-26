import { useSelector, useDispatch } from "react-redux"
import { indian, chinese, italian } from "../../../redux/actions/productsActions"
import MainMenuData from "./MainMenuData";
import "./MainMenuLists.css";

function fetchChinese(dispatch) {
    return () => {
        dispatch(chinese())
    }
}

function fetchIndian(dispatch) {
    return () => {
        dispatch(indian())
    }
}

function fetchItalian(dispatch) {
    return () => {
        dispatch(italian())
    }
}

function Menu(props) {
    const clickedState = useSelector((state) => state.buyItem.categorySelected);
    const dispatch = useDispatch();
    let { dishList, mainMenuItems} = props;
    return (
        <div>
            <div className="restrolists">
                <div className="restrolists-left">
                    Recommended
                    <div className="recommendation">
                        <div onClick={fetchIndian(dispatch)}>Indian</div>
                        <div onClick={fetchChinese(dispatch)}> Chinese </div>
                        <div onClick={fetchItalian(dispatch)}>Italian</div>
                    </div>
                </div>
                <div>
                    {dishList.map((dish) => {
                        console.log(clickedState + "123");

                        if (dish.details.category === clickedState) {
                            console.log("1231");
                            return (
                                <MainMenuData 
                                name={dish.details.name}
                                 price={dish.details.price} 
                                 description={dish.details.description}
                                  pic_Id={dish.details.pic_Id} 
                                  />
                                );
                        }
                    }
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;