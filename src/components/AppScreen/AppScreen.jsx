import React from 'react';

import './screen.css'

const AppScreen = ({ children }) => {
    return (
        <div className='container-fluid' >
            {children}
        </div>
    );
}

export default AppScreen;