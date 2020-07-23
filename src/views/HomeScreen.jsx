import React from 'react';

import AppScreen from '../components/AppScreen/AppScreen'
import AppHeader from '../components/AppHeader/AppHeader';

const HomeScreen = () => {
    return (
        <>
            <AppHeader />
            <AppScreen >
                <div className="jumbotron text-center" style={{ backgroundColor: 'white' }}>
                    <h1 className="display-4">Welcome to my Portfolio Page!</h1>
                    <p className="lead">My name is Andrew and I enjoy building things and solving problems.</p>
                    <hr className="my-4" />
                    <p>React/React-Native || JavaScript || Html & CSS || jQuery || Node.js || MongoDB || MySQL</p>
                    <hr className="my-1" />
                </div>
                <div class="card" style={{ width: '100%' }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </AppScreen>
        </>




    );
}

export default HomeScreen;