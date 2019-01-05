import React, { Component } from 'react'
import { Route, Switch, NavLink as Link, withRouter } from 'react-router-dom'
import Header from './Header.js'
import Main from './Main.js'

const Page = (props) => {
    const { history, content, pages } = props

    history.listen((location, action) => {
        console.log(action, location.pathname, location)
        props.setContent(location.pathname)
    });

    return <div>
      <Header title={content.header.title} subtitle={content.header.subtitle} pages={pages} />
      <Main body={content.body} pages={pages} />
    </div>
};

export default withRouter(Page)
