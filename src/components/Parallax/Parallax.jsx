import React from 'react';

import './style.css'
const Parallax = ({ children, height, style }) => {
    return (
        <div className='parallax text-center '
            style={{ height: height }}
        >
            {children}
        </div>
    );
}

export default Parallax;