import React from "react";
import {Routes, Route} from 'react-router-dom'

import About from "./About";
import Main from "./Main";
import Contact from "./Contact";
import Karya from "./Karya";
import Gallery from "./Gallery";
import Cart from "./Cart";

class MainPage extends React.Component{
    render(){
        return(
            <Routes>
                <Route exact path="/" Component={Main}/>
                <Route path="/About" Component={About}/>
                <Route path="/Karya" Component={Karya}/>
                <Route path="Contact" Component={Contact}/>
                <Route path="Gallery" Component={Gallery}/>
                <Route path="Cart" Component={Cart}/>
            </Routes>
        )
    }
}

export default MainPage