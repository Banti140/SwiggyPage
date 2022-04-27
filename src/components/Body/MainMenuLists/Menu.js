import { useSelector, useDispatch } from "react-redux"
import { indian, chinese, italian } from "../../../redux/actions/productsActions"
import MainMenuData from "./MainMenuData";
import "./MainMenuLists.css";

function findClickedItem(dish, clickedState) {
    return dish.details.category === clickedState;
}

function renderingClickedItem(clickedState) {
    return ((dish) => {
        const isClicked = findClickedItem(dish, clickedState);
        if (isClicked) {
            return (
                <MainMenuData
                    name={dish.details.name}
                    price={dish.details.price}
                    description={dish.details.description}
                    pic_Id={dish.details.pic_Id}
                />
            );
        }
    })
}

function actionDispatcher(dispatch, handleClick) {
    return () => {
        dispatch(handleClick())
    }
}

// function renderClickedItem(dishList, clickedState) {
//     return dishList.map(renderingClickedItem(clickedState))
// }

function Menu(props) {
    const clickedState = useSelector((state) => state.ItemsReducer.categorySelected);
    const dispatch = useDispatch();
    let { dishList, mainMenuItems } = props;
    return (
        <div>
            <div className="restrolists">
                <div className="restrolists-left">
                    Recommended
                    <div className="recommendation">
                        <div onClick={actionDispatcher(dispatch, indian)}>Indian</div>
                        <div onClick={actionDispatcher(dispatch, chinese)}> Chinese </div>
                        <div onClick={actionDispatcher(dispatch, italian)}>Italian</div>
                    </div>
                </div>
                <div>

                    {dishList.map(renderingClickedItem(clickedState))}

                </div>
            </div>
        </div>
    )
}

export default Menu;