import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter} from 'connected-react-router';
import Landing from './components/main/landing/Landing';
import LoginForm from './components/main/register/login/Login';

// import store, { history } from './redux/store'

const AppRoute = () => {
	return (
		// <Provider store={store}>
		// 	<Router>
		// 		<ConnectedRouter history={history}>
		// 			<Switch>
		// 				<Route exact path="/" component={Landing} />
		// 				<Route path="/login" component={LoginForm} />
		// 			</Switch>
		// 		</ConnectedRouter>
		// 	</Router>
		// </Provider>
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/login" component={LoginForm} />
			</Switch>
		</Router>
	)
}

export default AppRoute;