import React from 'react';

import './header.css'


const AppHeader = () => {
    return (
        <nav className="nav">
            <a className="nav-link active" href="home">About</a>
            <a className="nav-link" href="projects">Projects</a>
            <a className="nav-link" href="contact">Contact</a>
        </nav>
    );
}

export default AppHeader;