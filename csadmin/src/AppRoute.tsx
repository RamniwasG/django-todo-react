import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import Landing from './components/main/landing/Landing';
import LoginForm from './components/main/register/login/Login';

const AppRoute = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/login" component={LoginForm} />
			</Switch>
		</Router>
	)
}

export default AppRoute;