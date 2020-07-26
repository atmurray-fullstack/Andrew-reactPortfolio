import React from 'react';

import './style.css'
const Parallax = ({ children, height }) => {
    return (
        <div className='parallax text-center container-fluid'
            style={{ height: height }}
        >
            {children}
        </div>
    );
}

export default Parallax;