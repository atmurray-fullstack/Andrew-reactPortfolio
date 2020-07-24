import React from 'react';

import './style.css'
const Parallax = ({ children, height }) => {
    return (
        <div class='parallax text-center'
            style={{ height: height }}
        >
            {children}
        </div>
    );
}

export default Parallax;