import React from 'react';
import AppRoutes from "../../services/router/RoutesList";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header className={"header"}>
        <NavLink key={`nav-home-header`} className={"header__logo"} to={'/'}>
            <h1 className={"header__titre"}>HP</h1>
        </NavLink>
        <nav className={"navigation"}>
        {AppRoutes.filter(route=> route.inNav).map((route, routeIndex)=>{
            return (
                <NavLink exact={true} className={"nav-item"} key={`nav-${routeIndex}`} to={route.path}>{route.name}</NavLink>
            )
        })}
        </nav>
    </header>
);

export default Header;






