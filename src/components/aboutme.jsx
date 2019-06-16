import React, { Component } from 'react';
import { Grid } from 'react-mdl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
class About extends Component {
	render() {
		return(
			<div className="container-body">
				<Grid style={{maxWidth:'850px', background:'transparent'}} className="container-grid">	
					<div className="card">
						<div className="header-bg">
							<img className="card-picture" src="../assets/img/elisa.jpg" alt=""/>
						</div>
						<div className="info-container">
							<Link className="menu-button"style={{textDecoration: 'none', color: 'rgb(42, 41, 47)'}} to="/">
								<img className="logo" src='../assets/img/logo.png' alt="logo"/>
									elisa
							</Link>
							<p className="info-resume">Junior Web Developer</p>
							<div className="center-resume">
								<p className="text-resume">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
								<img style={{height:'180px'}} className="qrcode" src="../assets/img/QR_CV.png" alt="qr-code" />
							</div>
							<div className="mdl-list" style={{padding:'0'}}>
								<div className="mdl-list__item">
									<ul>
										<li>
											<a href="mailto:elisa.renda@hotmail.fr"><FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} /></a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/elisa-renda/"><FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedin} /></a>
										</li>
										<li>
											<a href="https://github.com/elisarenda"><FontAwesomeIcon className="fa fa-github" icon={faGithub} /></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Grid>
			</div>					
		)
 	}
}

export default About;
