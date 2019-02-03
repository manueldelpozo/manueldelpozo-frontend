import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

const Main = (props) => {
    const routes = props.pages.map(page => 
        <Route exact path={page.path} key={page.name} render={ () => (
            <page.component body={props.body} />
        )} />
    )
    
    return (
        <main>
            <Switch>
                {routes}
                <Route render={ () => <h1>404 Error</h1> } />
            </Switch>
        </main>
    )
}

Main.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        component: PropTypes.func.isRequired
    })),
    body: PropTypes.any
}

export default Main