import React from "react";
import {Link} from 'react-router-dom'
import './Index.css'
import { Component } from "react";

class Header extends Component {
    render(){
        return(
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-list-link"><Link className="link">Beranda</Link></li>
                    <li className="navbar-list-link"><Link className="link">FoodStok</Link></li>
                    <li className="navbar-list-link"><Link className="link">FoodEdu</Link></li>
                    <li className="navbar-list-link"><Link className="link">FoodDisc</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Header