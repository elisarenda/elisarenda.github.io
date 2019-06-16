import React, { Component } from 'react'

class Form extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
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
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        });

        this.props.onChange({
            firstName: "",
            lastName: "",
            email: "",
            message: ""
        })
        // console.log(this.state)
    }

    render() {
        return (

            <div id="feedback-form">
            <div>
              <form>
                    <div className="contact-name">
                        <div className="contact-firstname">
                            <input 
                                type="text" 
                                name="firstName" 
                                value={this.state.firstName} 
                                onChange={e => this.change(e)}
                                placeholder="First name">
                            </input>
                        </div>
                        <div className="contact-lastname">
                            <input 
                                type="text" 
                                name="lastName" 
                                value={this.state.lastName} 
                                onChange={e => this.change(e)}
                                placeholder="Last name">
                            </input>
                        </div>
                    </div>
                    <input 
                        name="email" 
                        type="text"
                        value={this.state.email} 
                        onChange={e => this.change(e)} 
                        placeholder="Email">
                    </input>
                    <textarea 
                        type="text" 
                        style={{height:'125px'}}
                        name="message"
                        value={this.state.message} 
                        onChange={e => this.change(e)} 
                        placeholder="Message">
                    </textarea>
                    <button 
                        type="submit" 
                        onClick={(e) => this.onSubmit(e)}>
                            Send message
                    </button>
              </form>
            </div>
          </div>
        )
    }
}

export default Form;