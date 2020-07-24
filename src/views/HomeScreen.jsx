import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AppScreen from '../components/AppScreen/AppScreen'
import AppHeader from '../components/AppHeader/AppHeader';
import Appfooter from '../components/AppFooter/AppFooter'
import './homeScreen.css';
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
            pic: 'burger.png',
            title: 'Murray\'s Burgers',
            description: 'App for tracking crypto values against int. currencies',
            deployedUrl: "https://frozen-badlands-38453.herokuapp.com/",
            repoUrl: "https://github.com/atmurray-fullstack/Murrays-Burgers-restaurant-app",
            tech: 'Express-Handlebars, JS,Node.js, Bootstrap'

        },
        {
            pic: 'weather_screenshot.png',
            title: 'Weather Forecast',
            description: 'Multiple choice quiz',
            deployedUrl: "https://atmurray-fullstack.github.io/Weather-Forecast-Info-app/",
            repoUrl: "https://github.com/atmurray-fullstack/Weather-Forecast-Info-app",
            tech: 'AJAX, API, JS, Bootstrap, jQuery'

        },
        {
            pic: 'multiChoice.jpg',
            title: 'Multichoice Quiz',
            description: 'Multiple Choice Quiz',
            deployedUrl: "https://mazdamike.github.io/Cryptocurrency-Exchange-and-News-Tracker/",
            repoUrl: "https://github.com/mazdamike/Cryptocurrency-Exchange-and-News-Tracker",
            tech: 'Bootstrap, jQuery, Node.js, AJAX, API'

        },
        {
            pic: 'softwareTeamGenerator.gif',
            title: 'Node CLI Team Maker',
            description: 'App for tracking crypto values against int. currencies',
            deployedUrl: "https://mazdamike.github.io/Cryptocurrency-Exchange-and-News-Tracker/",
            repoUrl: "https://github.com/mazdamike/Cryptocurrency-Exchange-and-News-Tracker",
            tech: 'Node, Express, JS, Html, Bootstrap'

        },
        {
            pic: 'Fchart.gif',
            title: 'Fitness Tracker',
            description: 'App for tracking crypto values against int. currencies',
            deployedUrl: "https://glacial-wildwood-74675.herokuapp.com/",
            repoUrl: "https://github.com/atmurray-fullstack/Fitness_Tracker",
            tech: 'MongoDB, Mongoose, Node, Express'

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

                <div className="card text-center mb-2 d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                    <div className="card-body d-flex-col justify-content-center align-items-center">
                        <h3 className="card-title">Projects</h3>
                        <p className="card-text">Here are some of the projects that I have built.</p>
                    </div>
                </div>
                <div id='projects-container' className='row justify-content-center text-center overflow-auto' style={{ height: 'auto' }} >

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
            <Appfooter />
        </>




    );
}

export default HomeScreen;