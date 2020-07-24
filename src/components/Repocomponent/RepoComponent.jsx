import React from 'react';
import './style.css'


const RepoComponent = ({ title, pic, repoUrl, deployedUrl, description, tech }) => {
    return (
        <div class="col-sm-3 col-md-6 col-lg-3 text-center card-container align-center">

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img class="img-fluid" src={require(`../../assets/images/${pic}`)} alt={title}
                            style={{ width: '100%', height: '100%', borderRadius: '4%' }} />

                    </div>
                    <div class="flip-card-back">
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
            <h4>{title}</h4>
        </div>


    );
}

export default RepoComponent;