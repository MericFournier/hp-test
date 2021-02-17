import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import './assets/style/main.scss';
import AppRoutes from "./services/router/RoutesList";
import AppContainer from "./containers/App/AppContainer";
import Home from "./containers/Home/Home";


const base = '/:locale(en|fr)?';

const App = () => (
    <BrowserRouter>
        <AppContainer>
            <Switch>
                {
                    AppRoutes.map((route,index)=>{
                        return (
                            <Route exact key={`${base}${route.path}`} path={`${base}${route.path}`}>
                                <route.module/>
                            </Route>
                        )
                    })
                }
                <Route exact path={"*"}>
                    <Home/>
                </Route>
            </Switch>
        </AppContainer>
    </BrowserRouter>
);

export default App;
