import React from 'react'
import { NavLink} from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <header className="App-header bg-dark text-white pt-2">
            <h4 className="px-3">Markup Generator</h4>
            <ul className="nav nav-tabs  ">
                <li className="nav-item">
                    <NavLink to="/flexgen" className="nav-link bg-secondary text-white border" activeClassName={'border-secondary'} >Flex</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/gridgen" className="nav-link text-white bg-secondary border" activeClassName={'border-secondary'}>Grid</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
