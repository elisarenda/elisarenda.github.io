import React, { Component } from 'react';
import TypingEffect from "typing-effect-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faEnvelope, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

class Landing extends Component {

  render() {
    return(
    	<div className="type-writer" style={{width: '100%', margin: 'auto'}}>
				{/* <p>Hi, my name is <strong className="middle-red">Elisa,</strong></p>
				<p><TypingEffect data={["junior web developer", "front end developer", "back end developer"]}/></p>
				<p>living in <strong className="middle-red">Belgium.</strong></p>  */}
				<h1 style={{color: 'rgb(135, 104, 123)', fontSize:'83px', fontFamily:'PlayfairDisplay-Regular', marginBottom:'0'}}>Elisa Renda</h1>
				<p>Full Stack Junior Web Developer</p>
				<div class="wrapper">
					<ul className="icon-landing">
						<li><FontAwesomeIcon icon={faFacebook}/></li>
						<li><FontAwesomeIcon icon={faEnvelope} /></li>
						<li><FontAwesomeIcon icon={faLinkedin} /></li>
						<li><FontAwesomeIcon icon={faGithub} /></li>
					</ul>
				</div>
    	</div>
    )
  }
}

export default Landing;
