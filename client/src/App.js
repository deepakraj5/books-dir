import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './components/Home/HomePage';

const App = () => {
    return (
        <div>

            <BrowserRouter>
            
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default App