import React from 'react';
import './footer.css'
const AppFooter = () => {
    return (
        <footer className="footer bg-dark">

            <div className="col-6 text-center pv-2  mx-auto" >

                <a className='mr-5' target="_blank" rel="noopener noreferrer" href="https://github.com/atmurray-fullstack"><img src={require("../../assets/images/github_black.png")}
                    style={{ height: '70px' }} alt='gitrepo link' /></a>

                <a className='mr-5' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrew-murray-7b9b195b/"><img src={require("../../assets/images/linkedIn.png")}
                    style={{ height: '70px' }} alt='LinkedIn link' /></a>
                <a className='mr-5' target="_blank" rel="noopener noreferrer"
                    href="https://docs.google.com/document/d/18zSc_9SBwhdEKJjUGzj3Na4t3rf_rP8MIf3-7dJr3n8/edit?usp=sharing"><img src={require("../../assets/images/resume.png")}
                        style={{ height: '70px' }} alt='Resume link' /></a>

            </div >
        </footer >

    );
}

export default AppFooter;