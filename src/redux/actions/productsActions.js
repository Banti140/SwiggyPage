import BUY_ITEM from "../constants/action-types"
// import FILTER_DISH from "../constants/action-types"


  export function buyItem(){
    // console.log("hitesh");
    // console.log("123");
    // return (dispatch)=>{
      
    //     dispatch({type:BUY_ITEM})
    // };
    return {
        type:BUY_ITEM,
        payload:"Thanks For purchasing",
    };
  }

  export function indian(){
    return {
     type:"indian",
     payload: "indian"
    };
}
export function chinese(){
    return {
     type:"chinese",
     payload: "chinese"
    };
}
export function italian(){
    return {
     type:"italian",
     payload: "italian"
    };
}

 