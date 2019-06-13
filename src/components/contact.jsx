import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Form from './form'
import SocialMedia from './socialMedia'
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
				<Cell col={5}>
					<h3>Elisa Renda</h3>
					<img
						src="../assets/img/java.jpg"
						alt="avatar"
						style={{height: '160px', borderRadius:'80px', opacity: '0.9'}}
					/>
					<SocialMedia/>
				</Cell>
				<Cell col={7}>
					<h3>Contact me</h3>
					<hr style={{width:'88%', margin:'auto'}}/>
						<div className="contact-list">
							<Form onChange={fields=> this.onChange(fields)}/>
							<p style={{fontSize:'10px'}}>
								{JSON.stringify(this.state.fields, null, 2)}
							</p>
						</div>
				</Cell>
        	</Grid>
    	</div>
    )
  }
}

export default Contact;
