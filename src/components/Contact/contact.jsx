import React, { Component } from 'react'
import Header from '../UI/Header/Header'
import Form from './Form/Form'
import classes from './Contact.module.scss'

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
 		})
 	};

    render() {
        return (
                <div className={classes.Contact}>
                    <div className={classes.Form}>
                        <div style={{paddingLeft:'8%'}}>
                            <Header text="Contact me" />
                        </div>
                            <div className={classes.socialIcon}>
                                <ul>
                                    <li><a href="https://www.facebook.com/renda.elisa"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://github.com/elisarenda"><i className="fab fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/elisa-renda/"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                            <p style={{color:'white', paddingTop: '8px'}}>If you have any question, please don't hesitate to contact using the form below...</p>
                            <Form onChange={fields=> this.onChange(fields)}/>
                            {/* <p style={{fontSize:'10px'}}>
                                {JSON.stringify(this.state.fields, null, 2)}
                            </p> */}
                    </div>
			</div>
        )
    }
}

export default Contact
