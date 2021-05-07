import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="App-header bg-dark text-white pt-2">
            <h4 className="px-3">Markup Generator</h4>
            <ul className="nav nav-tabs  ">
                <li className="nav-item">
                    <Link to="/flexgen" className="nav-link active bg-secondary text-white border-secondary" >Flex</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link text-white " >Grid</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
