import React, { Component } from 'react'
import classes from '../Contact.module.scss'

class Form extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    change = (e) => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault()
        // this.props.onSubmit(this.state);
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        this.props.onChange({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
        // console.log(this.state)
    }

    render() {
        return (
            <form>
                    <div>
                        <div className={classes.InputWrapper}>
                            <input 
                                type="text" 
                                name="name" 
                                value={this.state.name} 
                                onChange={e => this.change(e)}
                                placeholder="Name" 
                                />
                            <span />
                        </div>
                        <div className={classes.InputWrapper}>
                            <input 
                                type="text" 
                                name="email"
                                value={this.state.email} 
                                onChange={e => this.change(e)}
                                placeholder="Email" />
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
                                placeholder="Subject" />
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
                                placeholder="Message" />
                            <span />
                        </div>
                    </div>
                    <button className={classes.Submit} 
                        type="submit">
                        Send
                    </button>
                </form>
        )
    }
}

export default Form;