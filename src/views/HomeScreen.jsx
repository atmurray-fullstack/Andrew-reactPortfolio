import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AppScreen from '../components/AppScreen/AppScreen'
import AppHeader from '../components/AppHeader/AppHeader';
import './styleDefault.css';
import RepoComponent from '../components/Repocomponent/RepoComponent';


const HomeScreen = () => {
    const userProjects = [
        {
            pic: 'mealTime.gif',
            title: 'MealTime App',
            description: 'Fullstack Application',
            deployedUrl: "https://fathomless-temple-07681.herokuapp.com/",
            repoUrl: "https://github.com/atmurray-fullstack/MealTime-Group5",
            tech: 'Materialize, Express, Node.js, Express-Handlebars'

        },
        {
            pic: 'exchange_screenshot.png',
            title: 'Crypto Exchange',
            description: 'Track crypto values against int. currencies',
            deployedUrl: "https://mazdamike.github.io/Cryptocurrency-Exchange-and-News-Tracker/",
            repoUrl: "https://github.com/mazdamike/Cryptocurrency-Exchange-and-News-Tracker",
            tech: 'Materialize, jQuery, Express, Node.js, AJAX, API'

        },
        {
            pic: 'mealTime.gif',
            title: 'Crypto Exchange',
            description: 'App for tracking crypto values against int. currencies',
            deployedUrl: "https://mazdamike.github.io/Cryptocurrency-Exchange-and-News-Tracker/",
            repoUrl: "https://github.com/mazdamike/Cryptocurrency-Exchange-and-News-Tracker",
            tech: 'Materialize, jQuery, Express, Node.js, AJAX, API'

        },
        {
            pic: 'exchange_screenshot.png',
            title: 'Crypto Exchange',
            description: 'App for tracking crypto values against int. currencies',
            deployedUrl: "https://mazdamike.github.io/Cryptocurrency-Exchange-and-News-Tracker/",
            repoUrl: "https://github.com/mazdamike/Cryptocurrency-Exchange-and-News-Tracker",
            tech: 'Materialize, jQuery, Express, Node.js, AJAX, API'

        }
    ]
    const [userRepos, setUserRepos] = useState([])
    let userName = 'atmurray-fullstack'
    // const getUserData = async () => {
    //     await axios.get(`https://api.github.com/users/${userName}/repos`)
    //         .then(user => {
    //             const repos = user.data.map((el, ind) => {
    //                 return {
    //                     key: ind,
    //                     url: el.html_url,
    //                     description: el.description
    //                 }
    //             })
    //             console.log(user)
    //             setUserRepos(repos)
    //         })
    // }
    // useEffect(() => {
    //     getUserData();
    // }, [])

    return (
        <>
            <AppHeader />
            <AppScreen>
                <div className="jumbotron text-center" style={{ backgroundColor: 'white' }}>
                    <h1 className="display-4">Welcome to my Portfolio Page!</h1>
                    <p className="lead">My name is Andrew and I enjoy building things and solving problems.</p>
                    <hr className="my-4" />
                    <p>React/React-Native || JavaScript || Html & CSS || jQuery || Node.js || MongoDB || MySQL</p>
                    <hr className="my-1" />
                </div>
                <div className="card text-center mb-2" style={{ width: '100%' }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">Projects</h4>
                        <p className="card-text"></p>
                    </div>
                </div>
                <div className='row justify-content-center text-center d-flex flex-row flex-wrap' style={{ height: '40vh' }} >

                    {userProjects.map(el => {
                        return <RepoComponent
                            className='mx-auto col-3'
                            pic={el.pic}
                            title={el.title}
                            description={el.description}
                            repoUrl={el.repoUrl}
                            deployedUrl={el.deployedUrl}
                            tech={el.tech}

                        />
                    })}
                </div>



            </AppScreen>
        </>




    );
}

export default HomeScreen;