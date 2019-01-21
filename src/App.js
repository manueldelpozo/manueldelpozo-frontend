import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Page from './components/Page.js'
import './App.scss'
import 'typeface-roboto'

import Home from './components/pages/Home.js'
import Works from './components/pages/Works.js'
import Skills from './components/pages/Skills.js'
import Training from './components/pages/Training.js'
import Contact from './components/pages/Contact.js'

import data from './data/data.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.handlerContent = this.handlerContent.bind(this)
    this.updateLinks = this.updateLinks.bind(this)
    this.pages = [
      {
          path: '/',
          name: 'Home',
          component: Home,
          icon: 'home',
          themeColor: 'primary'
      },
      {
          path: '/works',
          name: 'Work Experiences',
          component: Works,
          icon: 'business_center',
          themeColor: 'secondary'
      },
      {
          path: '/skills',
          name: 'My Skills',
          component: Skills,
          icon: 'how_to_reg',
          themeColor: 'primary'
      },
      {
        path: '/training',
        name: 'My Training',
        component: Training,
        icon: 'fitness_center',
        themeColor: 'secondary'
    },
      {
          path: '/contact',
          name: 'Contact Me',
          component: Contact,
          icon: 'alternate_email',
          themeColor: 'primary'
      }
    ]
    this.initialPath = '/'

    this.state = {
      currentPath: this.initialPath, 
      pages: this.pages,
      lang: 'en',
      data
    }
  }

  handlerContent(currentPath) {
    this.setState({
      currentPath
    })
    this.updateLinks(currentPath)
  }

  updateLinks(currentPath) {
    const pages = this.pages.filter(page => page.path !== currentPath)
    setTimeout(() => {
      this.setState({
        pages 
      })
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Page content={this.state.data[this.state.lang]} 
                pages={this.state.pages} 
                setContent={this.handlerContent} />
        </Router>
      </div>
    )
  }
}

export default App
