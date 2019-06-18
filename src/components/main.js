import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Home/landingpage';
import AboutMe from './About/aboutme';
import Contact from './Contact/contact';
import Projects from './Projects/projects';
import Skills from './Skills/Skills';
import Works from './Work/Works'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/skills" component={Skills} />
    <Route path="/contact" component={Contact} />
    <Route path="/Works" component={Works} />
  </Switch>
)

export default Main;
