import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Landing from './modules/Landing/Landing'
import AddLink from './modules/AddLink/AddLink'
import GetLinks from './modules/GetLinks/GetLinks'
import UpdateLink from './modules/UpdateLink/UpdateLink'

function App() {
  return (
    <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/addLink' component={AddLink} />
        <Route exact path='/getLinks' component={GetLinks} />
        <Route exact path='/updateLink' component={UpdateLink} />
    </Router>
  );
}

export default App;
