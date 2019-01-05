import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Header = (props) => {
    const links = props.pages.map(page => <Link to={page.path} key={page.name}>{page.name}</Link>);
    return (
        <header>
            <nav>{links}</nav>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    )
}

export default Header;