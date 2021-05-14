import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route, HashRouter
} from "react-router-dom"
import FlexGen from "./Pages/FlexGen"
import GridGen from "./Pages/GridGen"

function App() {
    return (
        <div className="App">
            <Router>
                <HashRouter>
                    <Switch>
                        <Route path="/flexgen">
                            <FlexGen/>
                        </Route>
                        <Route path="/gridgen">
                            <GridGen/>
                        </Route>
                        <Route path="/">
                            <FlexGen/>
                        </Route>
                    </Switch>
                </HashRouter>
            </Router>
        </div>
    )
}

export default App
