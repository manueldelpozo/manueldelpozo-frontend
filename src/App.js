import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Page from './components/Page.js'
import './App.css'
import 'typeface-roboto'

import Home from './components/pages/Home.js'
import Works from './components/pages/Works.js'
import Skills from './components/pages/Skills.js'
import Contact from './components/pages/Contact.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.handlerContent = this.handlerContent.bind(this);
    
    this.state = { 
      currentPage: 'Home',
      content: {
        header: {
          title: 'Welcome to my web portfolio' ,
          subtitle: '— Ideate romantically, create pragmatically, design everything you do. —'
        },
        body: 'This is Home',
        footer: false
      },
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

  handlerContent(pathname) {
    let { content, currentPage } = this.state;

    switch(pathname) {
      case '/':
        currentPage = 'Home';
        content = {
          header: {
            title: 'Welcome to my web portfolio' ,
            subtitle: '— Ideate romantically, create pragmatically, design everything you do. —'
          },
          body: 'This is Home'
        };
        break;
      case '/contact':
        currentPage = 'Contact';
        content = {
          header: {
            title: 'Welcome to my contact' ,
            subtitle: '— Ideate romantically, create pragmatically, design everything you do. —'
          },
          body: 'This is Contact'
        };
        break;
      case '/works':
        currentPage = 'Works';
        content = {
          header: {
            title: 'Find out all the information about my work experience in web development' ,
            subtitle: '— Ideate romantically, create pragmatically, design everything you do. —'
          },
          body: 'This is My work experience'
        }
        break;
      case '/skills':
        currentPage = 'skills';
        content = {
          header: {
            title: 'Have a look and discover the information about my personal skills, my academic experience and my technical abilities' ,
            subtitle: ''
          },
          body: 'This is My skills'
        }
        break;
      default:
    }
    this.setState({
      currentPage,
      content
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Page name={this.state.currentPage} content={this.state.content} pages={this.state.pages} setContent={this.handlerContent}/>
        </Router>
      </div>
    );
  }
}

export default App
