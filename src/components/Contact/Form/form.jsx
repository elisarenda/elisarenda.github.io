/* eslint-disable */

import React, { Component } from 'react'
import classes from '../Contact.module.scss'
import firebaseConfig from '../../js/firebaseConfig'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            form: [],
            alert: false,
            alertData: {},
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    showAlert(type, message) {
        this.setState({
          alert: true,
          alertData: { type, message }
        });
        setTimeout(() => {
          this.setState({ alert: false });
        }, 4000)
      }
    
      resetForm() {
        this.refs.contactForm.reset();
      }
    
    componentWillMount() {
        let formRef = firebaseConfig.database().ref('form').orderByKey().limitToLast(6);
        formRef.on('child_added', snapshot => {
          const { name, email, object, message } = snapshot.val();
          const data = { name, email, object, message };
          this.setState({ form: [data].concat(this.state.form) });
        })
    }

    sendMessage(e) {
        e.preventDefault();
        const params = {
          name: this.inputName.value,
          email: this.inputEmail.value,
          object: this.inputObject.value,
          message: this.textAreaMessage.value
        };
        if (params.name && params.email && params.object && params.message) {
            firebaseConfig.database().ref('form').push(params).then(() => {
                this.showAlert('success', 'Your message was sent successfull');
            }).catch(() => {
                this.showAlert('danger', 'Your message could not be sent');
            });
            this.resetForm();
        } else {
          this.showAlert('warning', 'Please fill the form');
        }

    change = (e) => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault()
        // this.props.onSubmit(this.state);
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })

        this.props.onChange({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
        // console.log(this.state)
    }
}

    render() {
        return (
            <div>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
            <form onSubmit={this.sendMessage.bind(this)} ref='contactForm'>
                    <div>
                        <div className={classes.InputWrapper}>
                            <input 
                                type="text" 
                                name="name" 
                                value={this.state.name} 
                                onChange={e => this.change(e)}
                                placeholder="Name" 
                                ref={name => this.inputName = name} />
                                />
                            <span />
                        </div>
                        <div className={classes.InputWrapper}>
                            <input 
                                type="text" 
                                name="email"
                                value={this.state.email} 
                                onChange={e => this.change(e)}
                                placeholder="Email" 
                                ref={email => this.inputEmail = email}
                            />
                            <span />
                        </div>
                    </div>
                    <div>
                        <div className={classes.InputWrapper}>
                            <input 
                                type="text" 
                                name="subject" 
                                value={this.state.subject} 
                                onChange={e => this.change(e)}
                                placeholder="Subject" 
                                ref={object => this.inputObject = object} 
                                />
                            <span />
                        </div>
                    </div>
                    <div>
                        <div className={classes.InputWrapper}>
                            <textarea 
                                type="text" 
                                name="message" 
                                value={this.state.firstName} 
                                onChange={e => this.change(e)}
                                ref={message => this.textAreaMessage = message} 
                                placeholder="Message" />
                            <span />
                        </div>
                    </div>
                    <button className={classes.Submit} 
                        type="submit">
                        Send
                    </button>
                </form>
            </div>
        )
    }
}

export default Form