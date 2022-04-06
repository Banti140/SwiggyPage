import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
// import { Component } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Thankyou from "./Thankyou"

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Body/> 
//         <Footer />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<div className="App">
          <Header />
          <Body />
          <Footer />
        </div>} />
        <Route path="/home" element={<div className="App"> <Body /> </div>} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>

    </>
  )
}

export default App;
