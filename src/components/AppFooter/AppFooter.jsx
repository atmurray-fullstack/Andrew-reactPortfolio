import React from 'react';
import './footer.css'
const AppFooter = () => {
    return (
        <footer className="footer bg-dark">
            <div className="container-fluid text-center">
                <div className="row mx-auto">
                    <div className="col-5 text-left footer-contact">
                        <div>
                            <p style={{ margin: 0 }}>atmurray.fullstack@gmail.com</p>
                        </div>
                        <div>
                            <p>(470)265-9858</p>
                        </div>

                    </div>
                    <div className="col-7 text-left mt-2" style={{ display: 'inline-block' }}>

                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/atmurray-fullstack"><img src={require("../../assets/images/github_black.png")}
                            style={{ height: '40px', height: '40px' }} alt='gitrepo link' /></a>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrew-murray-7b9b195b/"><img src={require("../../assets/images/linkedIn.png")}
                            style={{ height: '40px', height: '40px' }} alt='LinkedIn link' /></a>
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://drive.google.com/file/d/1F2pbTpznDsifhXGTu2a_CuD_ebsFzk24/view?usp=sharing"><img src={require("../../assets/images/resume.png")}
                                style={{ height: '40px', height: '40px' }} alt='LinkedIn link' /></a>



                    </div>
                </div>
            </div>
        </footer>

    );
}

export default AppFooter;