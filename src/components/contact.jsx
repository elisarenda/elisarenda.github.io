import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
    return(
    	<div className="contact-body">
			<Grid className="contact-grid">
				<Cell col={6}>
					<h3>Elisa Renda</h3>
					<img
						src="../assets/img/java.jpg"
						alt="avatar"
						style={{height: '160px', borderRadius:'80px', opacity: '0.9'}}
					/>
					<p style={{ width: '75%', margin: 'auto', paddingTop: '2em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
				</Cell>
				<Cell col={6}>
					<h3>Contact me</h3>
					<hr/>
					<div className="contact-list">
						<List>
							<ListItem>
								<ListItemContent style={{fontSize: '22px', fontFamily: 'Montserrat-Regular'}}>
									<i className="fa fa-phone-square" aria-hidden="true"/>
									+32 493 76 17 77
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize: '22px', fontFamily: 'Montserrat-Regular'}}>
									<i className="fa fa-envelope" aria-hidden="true"/>
									elisa.renda@hotmail.fr
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize: '22px', fontFamily: 'Montserrat-Regular'}}>
									<i className="fa fa-linkedin" aria-hidden="true"/>
									elisa-renda
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize: '22px', fontFamily: 'Montserrat-Regular'}}>
									<i className="fa fa-github" aria-hidden="true"/>
									elisarenda
								</ListItemContent>
							</ListItem>
						</List>
					</div>
				</Cell>
        	</Grid>
    	</div>
    )
  }
}

export default Contact;
