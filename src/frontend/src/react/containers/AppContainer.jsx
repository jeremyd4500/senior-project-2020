import React from 'react';
import { withRouter } from 'react-router';

const AppContainer = (props) => {
	const { children, ...passThroughProps } = props;
	const childrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child, passThroughProps);
	});

	return <div className='AppContainer'>{childrenWithProps}</div>;
};

export default withRouter(AppContainer);
