import React, { Component } from 'react'
import { Route, Switch, NavLink as Link, withRouter } from 'react-router-dom'
import Header from './Header.js'
import Main from './Main.js'

class Page extends Component {
    componentWillMount() {
        this.props.history.listen((location, action) => {
            console.log(action, location.pathname, location)
            this.props.setContent(location.pathname)
        });
    }

    componentWillUnmount() {
        this.props.history.unlisten();
    }

    render() {
        return (
            <div>
                <Header title={this.props.content.header.title} subtitle={this.props.content.header.subtitle} pages={this.props.pages} />
                <Main body={this.props.content.body} pages={this.props.pages} />
            </div>
        );
    }
};

export default withRouter(Page)
