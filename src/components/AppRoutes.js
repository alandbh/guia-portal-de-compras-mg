import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Here we define all our material-ui ReactComponents.


/*
  Páginas
  -------------------------
*/
import Inicio from './Inicio';



/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > App
 */
const AppRoutes = (
	<Route>
    <Route exact path="/" component={telaInicio} /> 
    <Route path="/about" component={About}/>
  </Route>
);


const telaInicio = () => (
  <Inicio toggleDrawer={this.handleToggle} />
);


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)



export default AppRoutes;
