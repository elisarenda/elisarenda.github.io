import React, { Component } from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {

	componentDidMount() {
		this.effect = window.VANTA.NET({
		  el: '#landing-grid',
			color: 0xc88e82,
			backgroundColor: 0x2a292f,
			points: 5.00,
			maxDistance: 21.00,
			spacing: 14.00,
			showDots: false
		})
	}

	componentWillUnmount() {
		if (this.effect) this.effect.destroy()
	}

  	render() {
		return (
			<div className="App" id="landing-grid">
				<Layout>
					<Header 
						className="header-color" 
						title={
								<Link className="menu-button" to="/">
									<img className="logo" src="../assets/img/perso/logo.png" alt="logo"/>
									elisa
								</Link>
						} 
						scroll
						>
						<Navigation className="navigation-bar">
							<Link className="linkNavBar" to="/about">About</Link>
							<Link className="linkNavBar" to="/skills">Skills</Link>
							<Link className="linkNavBar" to="/projects">Projects</Link>
							<Link className="linkNavBar" to="/contact">Contact</Link>
						</Navigation>
					</Header>
					<Drawer
						title={ 
								<Link style={{textDecoration: 'none', color: '#906b7d', fontFamily: 'Sofia-Regular'}} to="/">
									<img className="elisa-img" src="../assets/img/perso/elisa.JPG" alt="logo"/> 
									Elisa
								</Link>}>
						<Navigation className="link-drawer">
							<Link to="/about">About</Link>
							<Link to="/skills">Skills</Link>
							<Link to="/projects">Projects</Link>
							<Link to="/contact">Contact</Link>
						</Navigation>
					</Drawer>
					<Content>
						<Main/>
					</Content>
				</Layout>
			</div>
		)
  	}
}

export default App
