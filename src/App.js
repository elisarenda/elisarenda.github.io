import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {

	componentDidMount() {
		this.effect = window.VANTA.NET({
		  el: "#landing-grid",
		  color: 0xdeafbf,
		  backgroundColor: 0x1e1925,
		  points: 11.00,
		  maxDistance: 18.00,
		  spacing: 17.00,
		  showDots: false
		})
	  }
	componentWillUnmount() {
		if (this.effect) this.effect.destroy()
	}

  render() {
    return (
		<div className="demo-big-content" id="landing-grid">
			<Layout>
				<Header 
					className="header-color" 
					style={{backgroundColor:'#1e1925'}} 
					title={
							<Link className="menu-button"style={{textDecoration: 'none', color: 'white'}} to="/">
								<img className="logo" src='../assets/img/logo.png' alt="logo"/>
								elisa
							</Link>
					} 
					scroll
				>
					<Navigation className="navigation-bar">
						<Link className="linkNavBar" to="/resume">Resume</Link>
						<Link className="linkNavBar" to="/about">About Me</Link>
						<Link className="linkNavBar" to="/projects">Projects</Link>
						<Link className="linkNavBar" to="/contact">Contact</Link>
					</Navigation>
				</Header>
				<Drawer style={{color:'white'}} 
						title={ <Link style={{textDecoration: 'none', color: '#a28390', fontFamily: 'Sofia-Regular'}} to="/">
									<img className="elisa-img" src='../assets/img/elisa.JPG' alt="logo"/> 
									Elisa
								</Link>}>
					<Navigation className="link-drawer">
						<Link to="/resume">Resume</Link>
						<Link to="/about">About Me</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contact">Contact</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main/>
				</Content>
			</Layout>
		</div>
    );
  }
}

export default App;
