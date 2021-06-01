import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home';
import AddQuestion from './AddQuestion'
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import {Link} from 'react-router-dom';

function Navbar({onRouteChange, name}) {
    return (
        <Router>
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
                <Link className="link" to='/addquestion'>Add Question</Link>
                <Link className="link" to='/spaces'>Spaces</Link>
                <a className="link" href="https://www.quora.com/">Answer</a>
                <a className="link" href="https://www.quora.com/">{name}</a>
                <p className="link"  onClick={() => onRouteChange('signout')}>Logout</p>
            </div>
        </div>

        
        </Router>
    
    )
}

export default Navbar
