import "./App.css";

<<<<<<< HEAD
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
=======
//Importing Components
import Header from "./components/Header/HeaderLeft";
import Footer from "./components/Footer/Footer";
// import MiddlePage from "./components/RestroPage/MiddlePage";
>>>>>>> main
import { Component } from "react";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
<<<<<<< HEAD
        <Body/> 
=======
        {/* <MiddlePage/> */}
>>>>>>> main
        <Footer />
      </div>
    );
  }
}

export default App;
