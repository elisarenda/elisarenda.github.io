import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import TypingEffect from "typing-effect-react";

class Landing extends Component {

  render() {
    return(
    	<div className="type-writer" style={{width: '100%', margin: 'auto'}}>
			{/* <p>Hi, my name is <strong className="middle-red">Elisa,</strong></p>
			<p><TypingEffect data={["junior web developer", "front end developer", "back end developer"]}/></p>
			<p>living in <strong className="middle-red">Belgium.</strong></p>  */}
			<h1 style={{color: '#806673', fontSize:'80px', fontFamily:'Sofia'}}>Elisa Renda</h1>
			<p stle={{fontSize: '12px'}}>Full Stack Junior Web Developer</p>
      	</div>
    )
  }
}

export default Landing;
