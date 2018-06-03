import { render, unmountComponentAtNode } from 'react-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './header/index'
import './App.css';
import MainPage from './js';
import AnimationPage from './js/animationpage';
import Axjx from './js/axjx';

class Hw extends React.Component {
  render() {
    return (
      //  <InTheLabel className="comicComponent" fig="01build"/>
      <div>
        {/* <Route exact path="/" component={Home} /> */}
        <Router>

          <div>
            <Header />
            {/* <ul>
              <li><Link to="/">Home</Link></li>
            </ul> */}
            <Route exact path="/" component={MainPage} />
            <Route path="/animation" component={AnimationPage} />
            {/* <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} /> */}
          </div>
        </Router>
        {/* <MainPage /> */}
      </div>
    );
  }

}
export default Hw;
