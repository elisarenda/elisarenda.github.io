import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
        //  <MuiThemeProvider>
        //  <div>
        //      <form>
        //          <TextField 
        //              name="firstName"
        //              hintText="First name"
        //              floatingLabelText="First name"
        //              value={this.state.firstName} 
        //              onChange={e => this.change(e)}
        //              floatingLabelFixed={true}
        //          />
        //          <TextField 
        //              name="lastName"
        //              hintText="Last name"
        //              floatingLabelText="Last name"
        //              value={this.state.lastName} 
        //              onChange={e => this.change(e)}
        //              floatingLabelFixed={true}
        //          />
        //          <TextField 
        //              name="email"
        //              hintText="Email"
        //              floatingLabelText="email"
        //              value={this.state.email} 
        //              onChange={e => this.change(e)}
        //              floatingLabelFixed={true}
        //              fullWidth={true}
        //          />
        //          <br />
        //           <TextField 
        //              name="message"
        //              hintText="Message"
        //              floatingLabelText="message"
        //              value={this.state.message} 
        //              onChange={e => this.change(e)}
        //              floatingLabelFixed={true}  
        //              fullWidth={true}
        //          />
        //          <br/>
        //          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        //      </form>
        //  </div>
        //  </MuiThemeProvider>
        )
    }
}

export default Form;