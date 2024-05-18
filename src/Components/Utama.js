import React from "react";
import { Route, Routes } from "react-router-dom";

import Beranda from "../Page/Main";
import About from "../Page/About";
import Karya from "../Page/Karya";
import Kontak from "../Page/Contact";
import Gallery from "../Page/Gallery";

class Utama extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" Component={Beranda} />
        <Route exact path="/About" Component={About} />
        <Route exact path="/Karya" Component={Karya} />
        <Route exact path="/Kontak" Component={Kontak} />
        <Route exact path="/Gallery" Component={Gallery} />
      </Routes>
    );
  }
}

export default Utama;
