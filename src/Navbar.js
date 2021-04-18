import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';

function Navbar({onRouteChange, name}) {
    return (
        <div className="navbar">
            <div className="logo">
               <p>J.K Lakshmipat University</p> 
            </div>
            <div className="input">
                <input className="inputBar" type="text" placeholder="Search Quora" />
            </div>
            <div className="links">
                <a className="link" href="https://www.quora.com/">
                    <HomeIcon />
                </a>
                <a className="link" href="https://www.quora.com/">Add Question</a>
                <a className="link" href="https://www.quora.com/">Spaces</a>
                <a className="link" href="https://www.quora.com/">Answer</a>
                <a className="link" href="https://www.quora.com/">{name}</a>
                <p className="link"  onClick={() => onRouteChange('signout')}>Logout</p>
            </div>
        </div>
    )
}

export default Navbar
