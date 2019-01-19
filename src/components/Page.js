import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header.js'
import Main from './Main.js'

class Page extends Component {
    constructor(props) {
        super(props)
        this.pagesBeforeMount = props.pages
    }

    componentWillMount() {
        this.props.history.listen((location, action) => {
            //console.log(action, location.pathname, location)
            this.props.setContent(location.pathname)
        })
    }

    componentWillUnmount() {
        this.props.history.unlisten()
    }

    componentDidMount() {
        this.props.setContent(this.props.location.pathname)
    }

    render() {
        const content = this.props.content[this.props.location.pathname]
        return (
            <div>
                <Header title={content.header.title} 
                        subtitle={content.header.subtitle} 
                        pages={this.props.pages} />
                <Main   body={content.body} 
                        pages={this.pagesBeforeMount} />
            </div>
        )
    }
}

export default withRouter(Page)
