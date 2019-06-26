import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LandingPage from './Home/landingpage'
import AboutMe from './About/aboutme'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import Works from './Work/Works'

const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/about" component={AboutMe} />
		<Route path="/projects" component={Works} />
		<Route path="/skills" component={Skills} />
		<Route path="/contact" component={Contact} />
		<Redirect to="/"/>
	</Switch>
)

export default Main
