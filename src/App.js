import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from "react-router-dom";
import Header from "./componets/Header";
import FlexSideBar from "./componets/FlexSideBar";
import FlexGenMain from './componets/FlexGenMain';
import Footer from "./componets/Footer";
import FlexGen from "./Pages/FlexGen";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/flexgen">
                        <FlexGen />
                    </Route>
                    <Route path="/">
                        <FlexGen />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
