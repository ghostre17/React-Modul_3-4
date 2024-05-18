import React from "react";
import {Routes, Route} from 'react-router-dom'

import Main from "../Page/Main";
import FoodDisc from "./FoodDisc";
import FoodEdu from "./FoodEdu";
import FoodStok from "./FoodStock";

class Navigation extends React.Component {
    render(){
        return(
            <Routes>
                <Route exact path="/" Component={Main}/>
                <Route path="/FoodStok" Component={FoodStok}/>
                <Route path="/FoodEdu" Component={FoodEdu}/>
                <Route path="/FoodDisc" Component={FoodDisc}/>
            </Routes>
        )
    }
}

export default Navigation