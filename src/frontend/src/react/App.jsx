import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import { PATHS } from 'utils';
import AppContainer from 'react/containers/AppContainer';
import LandingContainer from 'react/containers/LandingContainer';

const redirect = (nextState, replace, callback) => {
	replace(PATHS.home);
	return callback();
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
