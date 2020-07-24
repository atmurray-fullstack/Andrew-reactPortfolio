import React from 'react';
import './style.css'


const RepoComponent = ({ title, pic, repoUrl, deployedUrl, description, tech }) => {
    return (
        <div className="col-sm-3 col-md-6 col-lg-3 text-center card-container align-center">
            <h4>{title}</h4>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="img-fluid" src={require(`../../assets/images/${pic}`)} alt={title}
                            style={{ width: '100%', height: '100%', borderRadius: '4%' }} />

                    </div>
                    <div className="flip-card-back">
                        <p>{tech}</p>
                        <a target="_blank" rel="noopener noreferrer" href={deployedUrl}>
                            <p>Deployed App</p>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={repoUrl}>
                            <p>Github Repo </p>
                        </a>

                    </div>
                </div>
            </div>

            <h5>{description}</h5>
        </div>


    );
}

export default RepoComponent;