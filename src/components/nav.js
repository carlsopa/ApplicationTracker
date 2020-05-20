import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div>
            <h1>Navigation</h1>
            <nav>
                <ul>
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/applications">Applications</Link></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Nav;
