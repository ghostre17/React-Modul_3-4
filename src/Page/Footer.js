import React from "react";
import './index-module.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Muhammad Reyhan Asahy</p>
      </footer>
    );
  }
}

export default Footer;
