import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Landing extends Component {

  render() {
    return(
		<div className="landing-page" style={{width: '100%', margin: 'auto'}}>
				<h1 style={{color: 'rgb(160, 118, 111)', fontSize:'83px', fontFamily:'PlayfairDisplay-Regular', marginBottom:'0'}}>Elisa Renda</h1>
				<p>Full Stack Junior Web Developer</p>
				<div className="wrapper">
					<ul>
						<li><FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} /></li>
						<li><FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedin} /></li>
						<li><FontAwesomeIcon className="fa fa-github" icon={faGithub} /></li>
						<li><FontAwesomeIcon className="fa fa-facebook" icon={faFacebook}/></li>
					</ul>
				</div>
    	</div>
    )
  }
}

export default Landing;
