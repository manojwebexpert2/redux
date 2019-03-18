import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import About from './About';
import NavBar from './Navbar';

import createBrowserHistory from 'history/createBrowserHistory';
const customHistory=createBrowserHistory();

const CustomRoutes=()=>(
<Router histroy={customHistory}>
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
    <Route exact path='/' component={App} />
    <Route exact path='/about/:id' component={About} />
    </div>
    </div>
    </div>
    
</Router>    
)
export default CustomRoutes;