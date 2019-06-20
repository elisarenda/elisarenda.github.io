import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Landing extends Component {

  render() {
    return(
		<div className="landing-page" style={{width: '100%', margin: 'auto'}}>
				<h1 className="title-landing">Elisa Renda</h1>
				<p>Full Stack Junior Web Developer</p>
				<div className="wrapper">
					<ul>
						<li><a href="mailto:elisa.renda@hotmail.fr"><FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} /></a></li>
						<li><a href="https://www.linkedin.com/in/elisa-renda/"><FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedin} /></a></li>
						<li><a href="https://github.com/elisarenda"><FontAwesomeIcon className="fa fa-github" icon={faGithub} /></a></li>
						<li><a href="https://www.facebook.com/renda.elisa"><FontAwesomeIcon className="fa fa-facebook" icon={faFacebook}/></a></li>
					</ul>
				</div>
    	</div>
    )
  }
}

export default Landing
