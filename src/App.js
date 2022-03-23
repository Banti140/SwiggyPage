import "./App.css";

//Importing Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MiddlePage from "./components/RestroPage/MiddlePage";
import { Component } from "react";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <MiddlePage/>
        <Footer />
      </div>
    );
  }
}

export default App;
