import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import { PATHS } from 'utils';
import AppContainer from 'react/containers/AppContainer';
import LoginContainer from 'react/containers/LoginContainer';
import LandingContainer from 'react/containers/LandingContainer';
import ForgotPasswordContainer from 'react/containers/ForgotPasswordContainer';
import RegisterContainer from 'react/containers/RegisterContainer';

const redirect = (nextState, replace, callback) => {
	replace(PATHS.home);
	return callback();
};

const requireAuth = (nextState, replace, callback) => {
	// validate auth here
};

const routeConfig = {
	path: PATHS.root,
	component: AppContainer,
	indexRoute: { component: LandingContainer },
	childRoutes: [
		{
			path: PATHS.home,
			component: LandingContainer,
			childRoutes: []
			// onEnter: requireAuth
		},
		{
			path: PATHS.login,
			component: LoginContainer,
			childRoutes: []
			// onEnter: requireAuth
		},
		{
			path: PATHS.forgotPassword,
			component: ForgotPasswordContainer,
			childRoutes: []
			// onEnter: requireAuth
		},
		{
			path: PATHS.register,
			component: RegisterContainer,
			childRoutes: []
			// onEnter: requireAuth
		},
		{
			path: '*',
			onEnter: redirect
		}
	]
};

class App extends Component {
	render() {
		return <Router history={browserHistory} routes={routeConfig} />;
	}
}

export default App;
