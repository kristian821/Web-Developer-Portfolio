import React from 'react';

function Nav() {
    return(
        <nav>
            <ul className="flex-row" >
                <li>
                    <a href="#About"  className="p1">About Me</a>
                </li>
                <li>
                    <a href="#Portfolio" className="p1">Portfolio</a>
                </li>
                <li>
                    <a href="#Contact" className="p1">Contact</a>
                </li>
                <li>
                    <a href="#Resume" className="p1">Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;