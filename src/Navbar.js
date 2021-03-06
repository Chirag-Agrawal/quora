import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
               <p>Quora</p> 
            </div>
            <div className="input">
                <input className="inputBar" type="text" placeholder="Search Quora" />
            </div>
            <div className="links">
                <a className="link" href="https://www.quora.com/">
                    <HomeIcon />
                </a>
                <a className="link" href="https://www.quora.com/">Spaces</a>
                <a className="link" href="https://www.quora.com/">Answer</a>
                <a className="link" href="https://www.quora.com/">Notifications</a>
            </div>
        </div>
    )
}

export default Navbar
