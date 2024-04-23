import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Tours from './views/tours'
import Destination from './views/destination'
import Contact from './views/contact'
import Activities from './views/activities'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Tours} exact path="/tours" />
        <Route component={Destination} exact path="/destination" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Activities} exact path="/activities" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
