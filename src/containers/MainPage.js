   // <Container />
import React from 'react';
import Container from './Container.js';
import Form from './Form.js';
import {Route, NavLink, Switch, Redirect, HashRouter} from 'react-router-dom';



   class MainPage extends React.Component {


   	render(){

   		return(
   			<HashRouter basename="/">
   				<div>
   				<Switch>
   				<Route path="/" exact component={Container} />
   				<Route path="/form" exact component={Form} />
   				</Switch>
   				</div>
   				</HashRouter>

   			)
   	}


}


export default MainPage;