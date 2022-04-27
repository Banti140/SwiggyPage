import { connect } from "react-redux"
import { buyItem } from "../redux/actions/productsActions";
// import { useSelector,useDispatch } from "react-redux";

function handleClick(props){
    const {buyItem:buyItem2}=props;
   return ()=>{
    buyItem2();
   }
}

function Thankyou(props) {
    const { ItemsReducer, value } = props;
    // console.log(props);
    // const dispatch=useDispatch()

    // const value=useSelector((state)=>state.buyItem.value)
    return (
        <div>
            <h1>Thanks For Purchasing</h1>
            <h1>{value}</h1>
            <button onClick={handleClick(props)}> Add </button>
        </div>
    )
}

const mapDispatchToProps = {
    buyItem,
};

const mapStateToProps=(state)=>({
  value:state.ItemsReducer.value,
})

export default connect(mapStateToProps, mapDispatchToProps)(Thankyou)

// export default Thankyou;