import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import RouteCart from "./components/Body/MainMenuLists/Cart/RouteCart";
import {Routes,Route} from "react-router-dom";
import Thankyou from "./ThankYou/Thankyou";
import Help from "./components/Header/HeaderRight/HeaderRightOption/Help";
import Offers from "./components/Header/HeaderRight/HeaderRightOption/Offers";
import SignIn from "./components/Header/HeaderRight/HeaderRightOption/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div className="App">
          <Header />
          <Body />
          <Footer />
        </div>} />
        <Route path="/home" element={<div className="App"> <Body /> </div>} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/home" element={<div className="App"> <Body /> </div>} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/cart" element={<RouteCart />} />
        <Route path="/help" element={<Help />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}




export default App;
