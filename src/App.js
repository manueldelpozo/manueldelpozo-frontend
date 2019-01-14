import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Page from './components/Page.js'
import './App.scss'
import 'typeface-roboto'

import Home from './components/pages/Home.js'
import Works from './components/pages/Works.js'
import Skills from './components/pages/Skills.js'
import Contact from './components/pages/Contact.js'
import data from './data/data.json'

class App extends Component {

  constructor(props) {
    super(props);
    this.handlerContent = this.handlerContent.bind(this);
    
    this.state = {
      currentPage: '/', 
      pages: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            icon: 'alternate_email'
        },
        {
            path: '/works',
            name: 'Works',
            component: Works,
            icon: 'business_center'
        },
        {
            path: '/skills',
            name: 'Skills',
            component: Skills,
            icon: 'school'
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
            icon: 'alternate_email'
        }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      data
    });
  }

  handlerContent(pathname) {
    this.setState({
      currentPage: pathname
    });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <Router>
          <Page content={this.state.data.en[this.state.currentPage]} pages={this.state.pages} setContent={this.handlerContent} />
        </Router>
      </div>
    );
  }
}

export default App
