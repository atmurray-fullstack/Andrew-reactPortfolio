import React from 'react';
import './style.css'


const RepoComponent = ({ title, pic, repoUrl, deployedUrl, description, tech }) => {
    return (
        <div className="card col-3 mr-1 mb-2" style={{ height: '40%' }}>
            <img style={{ height: '30vh', marginTop: 5 }} src={require(`../../assets/images/${pic}`)} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{tech}</li>
                    <li className="list-group-item"><a href={repoUrl} target='_blank' rel="noopener noreferrer" >Github Repository</a></li>
                    <li className="list-group-item" ><a href={deployedUrl} target='_blank' rel="noopener noreferrer" >Deployed Application</a></li>
                </ul>

            </div>
        </div>


    );
}

export default RepoComponent;