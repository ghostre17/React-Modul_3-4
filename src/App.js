import React, { Component } from "react";
import Header from './Page/Header';
import MainPage from "./Page/MainPage";
import Footer from "./Page/Footer";
class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
