import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Main = (props) => {
    const routes = props.pages.map(page => 
        <Route exact path={page.path} key={page.name} render={ () => (
            <page.component body={props.body} />
        )} />
    );
    
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