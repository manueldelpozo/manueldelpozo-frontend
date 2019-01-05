import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Main = (props) => {
    const routes = props.pages.map(page => <Route path={page.path} key={page.name} component={page.component} />);
    return (
        <main>
            <Switch>
                {routes}
                <Route render={ () => <h1>404 Error</h1> } />
            </Switch>
        </main>
    )
}

export default Main;