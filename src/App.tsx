import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Start from "./pages/Start";
import Table from "./pages/Table";

const App = () => {

    return(
        <Router>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Рассчитать</Link>
                        </li>
                        <li>
                            <Link to="/items">На согласовании</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/items">
                        <Table />
                    </Route>
                    <Route path="/">
                        <Start />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
