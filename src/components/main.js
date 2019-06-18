import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './Home/landingpage';
import AboutMe from './About/aboutme';
import Contact from './Contact/contact';
import Skills from './Skills/Skills';
import Works from './Work/Works'

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutMe} />
    <Route path="/projects" component={Works} />
    <Route path="/skills" component={Skills} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
