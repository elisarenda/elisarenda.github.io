import React from 'react';
import Header from '../UI/Header/Header';
import classes from './About.module.scss';
import { Link } from 'react-router-dom';

const about = () => {
    return (
            <div className={classes.About}>
                <div className={classes.TextArea}>
                    <Header text="About me" />
					<p className={classes.Journey}>
                        Hi! My name is Elisa. I'm about to end my training within {' '}
                        <a href="https://www.becode.org/" target="_blank" rel="noopener noreferrer">
                            BeCode
                        </a>{' '} as a full stack web developer in Brussels. 
                    </p>
                    <p className={classes.Journey}>
                        Enthusiastic, I am interested in computer science and more particularly in the construction of websites and applications. 
                        Since the beginning of this training, I have gained experience in various fields:
                    </p>

                    <div className={classes.Journey}>
                        <ul>
                            <li><b>Technologies</b>: HTML5, CSS3, JavaScript, PHP</li>
                            <li><b>Frameworks/Librairies</b>: ReactJS, React Native, Meteor, VueJS, ThreeJS</li>
                            <li><b>Back-end/Services</b>: Firebase, MongoDB, mySQL</li>
                        </ul>
                    </div>

                    <p className={classes.Journey}>
                        As this sector completes my studies, I look forward to gaining more experience in IT.{' '}
                        I have a preference for React, but I'm open to all technologies. 
                    </p>

                    <p className={classes.Journey}>
                        I'm currently study and round out my skills to become a fullstack developer, looking for growth opportunities from a remote team-based environment.
                    </p>
                    <p className={classes.Journey}>
                        Would like to know more?
                        <br />
                        Feel free to <Link to="/contact">e-mail</Link> me.
                    </p>
                </div>
                <div className={classes.ImageArea}>
					<img className="card-picture" src="../assets/img/elisa.jpg" alt=""/>
					<img className={classes.qrCodeMobile} id="qrcode" src="../assets/img/QR_CV.png" alt="qr-code" />
					Check more!
                </div>
            </div>
    );
};

export default about;
// class About extends Component {
// 	render() {
// 		return(
// 			<div className="container-body">
// 				<Grid style={{maxWidth:'850px', background:'transparent'}} className="container-grid">	
// 					<div className="card">
// 						<div className="header-bg">
// 							<img className="card-picture" src="../assets/img/elisa.jpg" alt=""/>
// 						</div>
// 						<div className="info-container">
// 							<Link className="menu-button"style={{textDecoration: 'none', color: 'rgb(42, 41, 47)'}} to="/">
// 								<img className="logo" src='../assets/img/logo.png' alt="logo"/>
// 									elisa
// 							</Link>
// 							<p className="info-resume">Junior Web Developer</p>
// 							<div className="center-resume">
// 								<p className="text-resume">
//								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
// 								<img style={{height:'180px'}} className="qrcode" src="../assets/img/QR_CV.png" alt="qr-code" />
// 							</div>
// 							<div className="mdl-list">
// 								<div style={{padding:'0'}} className="mdl-list__item">
// 									<ul>
// 										<li>
// 											<a href="mailto:elisa.renda@hotmail.fr"><FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} /></a>
// 										</li>
// 										<li>
// 											<a href="https://www.linkedin.com/in/elisa-renda/"><FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedin} /></a>
// 										</li>
// 										<li>
// 											<a href="https://github.com/elisarenda"><FontAwesomeIcon className="fa fa-github" icon={faGithub} /></a>
// 										</li>
// 									</ul>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</Grid>
// 			</div>					
// 		)
//  	}
// }

// export default About;
