import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <nav className="btn-content py-5">
                <Link to="/">
                    <button className="btn btn-light">
                    Add Meal
                   </button>
                </Link>
                <Link to="/addMeal">
                   <button className="btn btn-light">
                   
                   Add Order
                   </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;