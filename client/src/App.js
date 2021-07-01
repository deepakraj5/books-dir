import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage';
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return (
        <div>

            <BrowserRouter>

                <NavBar />
            
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default App