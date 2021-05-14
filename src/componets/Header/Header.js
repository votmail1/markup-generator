import React from 'react'
import {NavLink} from "react-router-dom"
import './Header.css'
const Header = () => {
    const fullAdress = window.location.href
    return (
        <header className="App-header bg-dark text-white pt-2">
            <h4 className="px-3">Markup Generator</h4>
            <ul className="nav nav-tabs  ">
                <li className="nav-item">
                    <NavLink to={'/flexgen'}
                             className={
                                 `nav-link text-white border${(fullAdress.slice(fullAdress.length-19, fullAdress.length) === 'markup-generator/#/') ||
                                     (fullAdress.slice(fullAdress.length-18, fullAdress.length) === 'markup-generator#/') ?
                                     'border-secondary bg-secondary' :
                                     ''}`}
                             activeClassName={'border-secondary bg-secondary'}>Flex</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/gridgen"} className="nav-link text-white border"
                             activeClassName={'border-secondary bg-secondary'}>Grid</NavLink>
                </li>
            </ul>
        </header>
    )
}
export default Header
