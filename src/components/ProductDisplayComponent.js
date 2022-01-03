import React from "react";
import logo from "../amazon.jpg";
import "../App.css";

class ProductDisplayComponent extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div className="FlexStyles">
            <img src={logo} alt="Hooo!! No" style={{width:"40em"}}/>
        </div>
    }
}

export default ProductDisplayComponent;