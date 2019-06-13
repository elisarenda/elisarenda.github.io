import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Github from 'react-icons/lib/fa/github'
import Linkedin from 'react-icons/lib/fa/linkedin'
import Envelope from 'react-icons/lib/fa/envelope'
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    return(
		<div className="container-body">
			<Grid style={{width:'70%', background:'transparent'}} className="container-grid">	
				<div className="card">
					<div className="header-bg">
						<img className="card-picture" src="../assets/img/elisa.jpg" alt=""/>
					</div>
					<div className="info-container">
						<Link className="menu-button"style={{textDecoration: 'none', color: '#564863'}} to="/">
							<img className="logo" src='../assets/img/logo.png' alt="logo"/>
								elisa
						</Link>
						<p className="info">Junior Web Developer</p>
						<hr className="resume-separator"/>
						<div className="center-resume">
							<p className="text-resume">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
							<img style={{height:'180px'}} className="qrcode" src="../assets/img/qrcode.png" alt="qr-code" />
						</div>
						<ul className="icon-list">
							<li className="github">
								<Github />
							</li>
							<li className="linkedin">
								<Linkedin />
							</li>
							<li className="email">
								<Envelope />
							</li>
						</ul>
					</div>
				</div>
        	</Grid>
    	</div>					
    )
  }
}

export default Resume;
