import React, { Component } from 'react'
import classes from '../Contact.module.scss'
import axios from 'axios'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            isSend: true
        }
        this.change = this.change.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    change = (e) => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        axios.get(`${process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://arcane-cliffs-98895.herokuapp.com'}/api/form`, { params: {
            name,
            email,
            subject,
            message
        } }).then((response) => {
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleClick () {
        this.setState(state => ({
            isSend: !state.isSend
        }))
      }    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                                    placeholder="Email" 
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
                                    placeholder="Message" />
                                <span />
                            </div>
                        </div>
                                                
                        <button onClick={this.handleClick} 
                                className={classes.Submit} 
                                type="submit">
                                    {this.state.isSend ? 'Send' : '✔'}
                        </button>
                    </form>
            </div>
        )
    }
}

export default Form