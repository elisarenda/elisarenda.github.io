import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class SocialMedia extends Component {
   

  render() {

  
    //URL patterns for Social media sites share functionalities
    const facebookUrl = `https://www.facebook.com/renda.elisa`;
    const linkedinUrl = `https://www.linkedin.com/in/elisa-renda/`;
    const githubUrl = `https://github.com/elisarenda`;

    return (
						<List>						
							<ListItem>
								<ListItemContent style={{fontSize: '22px', fontFamily: 'Montserrat-Regular'}}>
									<i className="fa fa-envelope" aria-hidden="true"/>
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize: '22px', fontFamily: 'Montserrat-Regular'}}>
									<i className="fa fa-linkedin" aria-hidden="true"/>
								</ListItemContent>
							</ListItem>
							<ListItem>
								<ListItemContent style={{fontSize: '22px', fontFamily: 'Montserrat-Regular'}}>
									<i className="fa fa-github" aria-hidden="true"/>
								</ListItemContent>
							</ListItem>
						</List> 
        // <div className="socialShareContainer">
        //     <div>
        //         <a style={{textDecoration:'none'}} href={facebookUrl}><i class="fab fa-facebook-square"></i></a>
        //         <a style={{textDecoration:'none'}} href={linkedinUrl}>b</a>
        //         <a style={{textDecoration:'none'}} href={githubUrl}>s</a>
        //     </div>           
        // </div>
    );
  }
}
export default SocialMedia;