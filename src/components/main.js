import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Home/landingpage';
import AboutMe from './About/aboutme';
import Contact from './Contact/contact';
import Projects from './Projects/projects';
import Skills from './Skills/Skills'


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/skills" component={Skills} />
  </Switch>
)

export default Main;
