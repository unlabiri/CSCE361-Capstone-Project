import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home Page</Link></li>
                <li><Link to="/login">Login Page</Link></li>
                <li><Link to="/account">Account Page</Link></li>
                <li><Link to="/elections">Elections Page</Link></li>
                <li><Link to="/pastelections">Past Elections Page</Link></li>
                <li><Link to="/ballot">Ballot Page</Link></li>
                <li><Link to="/confirmation">Confirmation Page</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
