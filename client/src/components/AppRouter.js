import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const isAuth = false;

    return (
        <div>
            <Switch>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
            </Switch>
        </div>
    );
};

export default AppRouter;