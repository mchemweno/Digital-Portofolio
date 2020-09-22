import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import Skills from "./containers/Skills/Skills";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact component={HomePage}/>
                <Route path={'/skills'} exact component={Skills}/>
            </Switch>
        </Layout>
    );
}

export default App;
