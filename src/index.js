import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import projectsReducer from "./store/reducers/projects";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import skillsReducer from "./store/reducers/skills";
import servicesReducer from "./store/reducers/services";

const rootReducer = combineReducers({
    projects: projectsReducer,
    skills: skillsReducer,
    services: servicesReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
