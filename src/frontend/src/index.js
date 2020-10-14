import React from 'react';
import ReactDOM from 'react-dom';
import axe from 'react-axe';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

import App from 'react/App';
import 'less/styles.less';

axe(React, ReactDOM, 1000);

ReactDOM.render(<App />, document.getElementById('app'));
