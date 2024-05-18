import React from "react";

class Footer extends React.Component {
    render(){
        return(
            <footer>
                <p>&copy; {new Date().getFullYear()} Muhammad Reyhan Asahy</p>
            </footer>
        )
    }
}

export default Footer