import React from 'react';

const Header = () => {
    return (
        <header className="App-header bg-dark text-white pt-2">
            <h4 className="px-3">Markup Generator</h4>
            <ul className="nav nav-tabs  ">
                <li className="nav-item">
                    <a className="nav-link active bg-secondary text-white border-secondary" href="#">Flex</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white " href="#">Grid</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
