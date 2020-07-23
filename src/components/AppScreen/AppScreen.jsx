import React from 'react';

import './screen.css'

const AppScreen = ({ children }) => {
    return (
        <div className='container m-0 mx-auto' >
            {children}
        </div>
    );
}

export default AppScreen;