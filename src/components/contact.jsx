import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Form from './form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
class Contact extends Component {

	state =  {
		fields: {},
	};

	onChange = updatedValue => {
		console.log('App comp got: ', updatedValue)
		this.setState({ 
			fields: {
				...this.state.fields,
				...updatedValue
			}
		});
	};

	render() {
    return(
    	<div className="contact-body">
			<Grid className="contact-grid">
			<Cell col={1}/>
				<Cell className="info-contact" col={4}>
					<h3 style={{paddingBottom:'45px', fontFamily:'Sofia'}}>Elisa Renda</h3>
					<img
						src="../assets/img/java.jpg"
						alt="avatar"
						style={{height: '160px', borderRadius:'80px'}}
					/>
					<div className="mdl-list">
						<div className="mdl-list__item">
							<ul>
								<li><FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} /></li>
								<li><FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedin} /></li>
								<li><FontAwesomeIcon className="fa fa-github" icon={faGithub} /></li>
							</ul>
						</div>
					</div>
				</Cell>
				<Cell className="form-contact" col={6}>
					<h3>Contact me</h3>
					<hr style={{width:'88%', margin:'auto'}}/>
						<div className="contact-list">
							<Form onChange={fields=> this.onChange(fields)}/>
							<p style={{fontSize:'10px'}}>
								{JSON.stringify(this.state.fields, null, 2)}
							</p>
						</div>
				</Cell>
				<Cell col={1}/>
        	</Grid>
    	</div>
    )
  }
}

export default Contact;
