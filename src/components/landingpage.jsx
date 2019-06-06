import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {

	componentDidMount() {
		this.effect = window.VANTA.NET({
		  el: "#landing-grid",
		  color: 0xdeafbf,
		  backgroundColor: 0x1e1925,
		  points: 11.00,
		  maxDistance: 18.00,
		  spacing: 17.00,
		  showDots: false
		})
	  }
	componentWillUnmount() {
		if (this.effect) this.effect.destroy()
	}

  render() {
    return(
    	<div style={{width: '100%', margin: 'auto'}}>
				<Grid id="landing-grid">
					<Cell col={12}>
						<div className="banner-text">
							{/* <h1>Full Stack Web Developer</h1>
							<p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>
							<div className="social-links">
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-free-code-camp" aria-hidden="true" />
								</a>
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-youtube-square" aria-hidden="true" />
								</a>
							</div> */}
						</div>
					</Cell> 
				</Grid>
      	</div>
    )
  }
}

export default Landing;
