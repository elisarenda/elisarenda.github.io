import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="min-height-container">
        <Grid className="cardContent">
			<Cell col={4}>
				<div className="img-resume"style={{textAlign: 'center'}}>
					<img
					src="../assets/img/elisa.jpg"
					alt="avatar"
					style={{height: '200px', borderRadius:'100px'}}
						/>
				</div>
				<h3 style={{fontFamily:'auto'}}>Elisa Renda</h3>
				<p className="sub-title-resume" style={{color: 'grey'}}>Junior Web Developer</p>
				<hr style={{borderTop: '3px solid #906b7d', width: '100%'}}/>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
				<hr style={{borderTop: '3px solid #906b7d', width: '100%'}}/>
          	</Cell> 
        	<Cell className="resume-right-col" col={5}>
				<img
					src="../assets/img/elisa-qrcode.png"
					alt="QrCode"
					style={{height: '210px'}}
				/>
				{/* <h2>Skills</h2>
				<Skills
					skill="javascript"
					progress={100}
					/>
				<Skills
					skill="HTML/CSS"
					progress={80}
					/>
				<Skills
					skill="NodeJS"
					progress={50}
					/>
				<Skills
					skill="React"
					progress={25}
					/> */}
          </Cell> 
        </Grid>
      </div>
    )
  }
}

export default Resume;
