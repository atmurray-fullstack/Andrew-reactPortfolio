import React from 'react';

import './screen.css'

const AppScreen = ({ children }) => {
    return (
        <div className='container' >
            {children}
        </div>
    );
}

export default AppScreen;