import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import {Route, Switch} from "react-router-dom";
import Skills from "./containers/Skills/Skills";
import Projects from "./containers/Projects/Projects";
import {fetchProjects} from "./store/actions/projects";
import {useDispatch} from "react-redux";
import {fetchSkills} from "./store/actions/skills";

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const App = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [skillError, setSkillError] = useState(null);

    const fetchSkillsHandler = useCallback(async () => {
        await sleep(2000);
        try {
            await dispatch(fetchSkills());
        } catch (err) {
            return err;
        }
    }, [dispatch]);
    const fetchProjectsHandler = useCallback(async () => {
        await sleep(2000);
        try {
            await dispatch(fetchProjects());
        } catch (err) {
            return err;
        }
    }, [dispatch]);

    useEffect(() => {
        fetchProjectsHandler().catch(err => setError(err.message));
        fetchSkillsHandler().catch(err => setSkillError(err.message))
        console.log('haha');
    }, [fetchProjectsHandler, fetchSkillsHandler])
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact component={() => <HomePage  error={error} skillError={skillError}/>}/>
                <Route path={'/skills'} exact component={() => <Skills skillError={skillError}/>}/>
                <Route path={'/projects'} component={() => <Projects error={error} />} />
            </Switch>
        </Layout>
    );
}

export default App;
