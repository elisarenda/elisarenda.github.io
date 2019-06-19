// import React, { Component } from 'react';
// import { Grid, Cell } from 'react-mdl';
// import Form from './Form/form'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// class Contact extends Component {

// 	state =  {
// 		fields: {},
// 	};

// 	onChange = updatedValue => {
// 		console.log('App comp got: ', updatedValue)
// 		this.setState({ 
// 			fields: {
// 				...this.state.fields,
// 				...updatedValue
// 			}
// 		});
// 	};

// 	render() {
//     return(
//     	<div className="contact-body">
// 			<Grid className="contact-grid">
// 				<Cell col={2}/>
// 					<Cell className="info-contact" col={3}>
// 						<h3 style={{paddingBottom:'65px', fontFamily:'Sofia'}}>Elisa Renda</h3>
// 						<img
// 							src="../assets/img/java.jpg"
// 							alt="avatar"
// 							style={{height: '168px', borderRadius:'80px'}}
// 						/>
// 						<div className="mdl-list">
// 							<div className="mdl-list__item" style={{padding:'82px 0 0 0px'}}>
// 								<ul style={{padding:'0'}}>
// 									<li>
// 										<a href="mailto:elisa.renda@hotmail.fr"><FontAwesomeIcon className="fa fa-envelope" icon={faEnvelope} /></a>
// 									</li>
// 									<li>
// 										<a href="https://www.linkedin.com/in/elisa-renda/"><FontAwesomeIcon className="fa fa-linkedin" icon={faLinkedin} /></a>
// 									</li>
// 									<li>
// 										<a href="https://github.com/elisarenda"><FontAwesomeIcon className="fa fa-github" icon={faGithub} /></a>
// 									</li>
// 								</ul>
// 							</div>
// 						</div>
// 					</Cell>
// 					<Cell className="form-contact" col={5}>
// 						<h3 style={{textAlign: 'left', paddingLeft: '35px', fontWeight: '900'}}>Contact me</h3>
// 						<p style={{textAlign: 'left', paddingLeft: '35px', paddingRight: '35px'}}>If you have any questions, please don’t hesitate to contact using form below…</p>
// 						<hr style={{width:'88%', margin:'auto'}}/>
// 							<div className="contact-list">
// 								<Form onChange={fields=> this.onChange(fields)}/>
// 								<p style={{fontSize:'10px'}}>
// 									{JSON.stringify(this.state.fields, null, 2)}
// 								</p>
// 							</div>
// 					</Cell>
// 					<Cell col={2}/>
//         	</Grid>
//     	</div>
//     )
//   }
// }

// export default Contact;

import React, { Component } from 'react';
import Header from '../UI/Header/Header';
import classes from './Contact.module.scss';

class Contact extends Component {
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
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/elisa-renda/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <p style={{color:'white', paddingTop: '25px'}}>If you have any question, please don't hesitate to contact using the form below...</p>
                        <form method="POST" action="elisa.renda@hotmail.fr">
                            <div>
                                <div className={classes.InputWrapper}>
                                    <input type="text" name="name" style={{color:'hsl(240, 4%, 76%)'}}placeholder="Name" />
                                    <span />
                                </div>
                                <div className={classes.InputWrapper}>
                                    <input type="email" required name="email" placeholder="Email" />
                                    <span />
                                </div>
                            </div>
                            <div>
                                <div className={classes.InputWrapper}>
                                    <input type="text" name="subject" placeholder="Subject" />
                                    <span />
                                </div>
                            </div>
                            <div>
                                <div className={classes.InputWrapper}>
                                    <textarea type="text" required name="message" placeholder="Message" />
                                    <span />
                                </div>
                            </div>
                            <button className={classes.Submit} type="submit">
                                Send
                            </button>
                        </form>
                    </div>
			</div>
        );
    }
}

export default Contact;
