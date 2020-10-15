import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Router, browserHistory } from 'react-router';

import { PATHS } from 'utils';
import AppContainer from 'react/containers/AppContainer';
import LoginContainer from 'react/containers/LoginContainer';
import LandingContainer from 'react/containers/LandingContainer';
import ForgotPasswordContainer from 'react/containers/ForgotPasswordContainer';
import RegisterContainer from 'react/containers/RegisterContainer';
import AccountContainer from 'react/containers/AccountContainer';

const redirect = (nextState, replace, callback) => {
	replace(PATHS.home);
	return callback();
};

const requireAuth = (nextState, replace, callback) => {
	// validate auth here
};

const scrollTop = () => {
	window.scrollTo(0, 0);
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
			path: PATHS.account,
			component: AccountContainer,
			childRoutes: []
			// onEnter: requireAuth
		},
		{
			path: '*',
			onEnter: redirect
		}
	]
};

const Routes = () => (
	<Router
		onUpdate={scrollTop}
		history={browserHistory}
		routes={routeConfig}
	/>
);

export default hot(Routes);
