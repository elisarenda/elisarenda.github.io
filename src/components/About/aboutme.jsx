import React from 'react';
import Header from '../UI/Header/Header';
import classes from './About.module.scss';

const about = () => {
    return (
            <div className={classes.About}>
                <div className={classes.TextArea}>
                    <Header text="About me" />
					<p className={classes.Journey}>
                        A highly driven and motivated developer with over three years’ experience in web development.
                    </p>
                    <p className={classes.Journey}>
                        In 2016, I got my first job as a junior frontend developer at{' '}
                        <a href="https://www.tma.vn/" target="_blank" rel="noopener noreferrer">
                            TMA Solutions
                        </a>{' '}
                        in HCM, Vietnam. I had the chance working with highly experienced partners like Nokia, building
                        large Single Page Applications for networking.
                    </p>

                    <p className={classes.Journey}>
                        While woking at TMA Solution, I was also exposed to backend development with dockerization and
                        continous delivery.
                    </p>

                    <p className={classes.Journey}>
                        Two years later I moved to Can Tho and started to work for{' '}
                        <a href="https://codeberryschool.com/" target="_blank" rel="noopener noreferrer">
                            CodeBerry code school
                        </a>
                        . Here, we work as a multi-national, 100% remote team, applied Agile development through Scrum framework deliver features to teach people coding.
                    </p>

                    <p className={classes.Journey}>
                        I'm currently resigned from work to study and round out my skills to become a fullstack
                        developer, looking for growth opportunities from a remote team-based environment.
                    </p>
                </div>
                <div className={classes.ImageArea}>
					{/* <img className="card-picture" src="../assets/img/elisa.jpg" alt=""/> */}
					<img style={{height:'250px',width: '250px'}} className="qrcode" src="../assets/img/QR_CV.png" alt="qr-code" />
					Check more about me!
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
