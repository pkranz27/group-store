import React, { createRef, useState } from "react";
import { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './css/ProductBoard.css'

import Reviews from "./Reviews";

class ProductBoard extends Component {
    constructor(props) {
        super(props)
        
    }




    render() {
        return (
            <div className="container">
                <div className="image-container">
                    <img src="https://m.media-amazon.com/images/I/71lxygZep8L._AC_SY355_.jpg" height='200' widith="100"></img>
                </div>
                <div className="information-container">
                    <h1 className="product-title">Product Name</h1>
                    <div className="list">Some Specs:</div>
                    <div className="specs">
                        <ul>
                            <li>Price: 80$ </li>
                            <li>Manufacturer: Money inc. </li>
                            <li>Weight: equivalent to a bag of cat litter </li>
                            <li>Contents: NOT cat Litter</li>
                            <li>Dimensons: 3rd </li>
                            <li>Delveiry By: sometime between next week and never</li>
                        </ul>
                    </div>
                    </div>
                    <div className="review-container" height="500" width="400">
                        <Reviews></Reviews> 
                </div>    
            </div>
        )
    }
}
export default ProductBoard;