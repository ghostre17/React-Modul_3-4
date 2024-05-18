import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './index-module.css';

function Header() {
    const location = useLocation()
    return (
        <nav className="navbar">
                <h2 className="title"><Link to="/" className="link-title">Althair</Link> </h2>
                <ul className="navbar-list">
                    <li className="navbar-list-link"><Link className={`link ${location.pathname === "/" ? "active-link" : ""}`} to="/About" >About</Link></li>
                    <li className="navbar-list-link"><Link className={`link ${location.pathname === "/Karya" ? "active-link" : ""}`} to="/Karya" >Karya</Link> </li>
                    <li className="navbar-list-link"><Link className={`link ${location.pathname === "/Contact" ? "active-link" : ""}`} to="/Contact" >Contact</Link> </li>
                    <li className="navbar-list-link"><Link className={`link ${location.pathname === "/Gallery" ? "active-link" : ""}`} to="/Gallery" >Gallery</Link> </li>
                    <li className="navbar-list-link"><Link className={`link ${location.pathname === "/Cart" ? "active-link" : ""}`} to="/Cart" >Cart</Link> </li>
                </ul>
            </nav>
        )
        
        
} 
        
export default Header;
