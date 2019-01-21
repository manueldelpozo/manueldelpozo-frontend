import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header.js'
import Main from './Main.js'
import Grid from '@material-ui/core/Grid'

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
                <Grid container spacing={24} justify="center" alignItems="center">
                    <Grid item xs={10} sm={6}>
                        <Header title={content.header.title} 
                                subtitle={content.header.subtitle}
                                pages={this.props.pages} />
                        <Main   body={content.body} 
                                pages={this.pagesBeforeMount} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withRouter(Page)
