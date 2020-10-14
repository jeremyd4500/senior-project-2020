import React from 'react';
import ReactDOM from 'react-dom';
import axe from 'react-axe';
import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

import App from 'react/App';
import store from './state';
import 'less/styles.less';

axe(React, ReactDOM, 1000);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
