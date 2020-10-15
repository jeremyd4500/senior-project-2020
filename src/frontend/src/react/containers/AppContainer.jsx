import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Toaster from 'react/components/Toaster';
import { clearAlert } from 'state/actions';

const AppContainer = (props) => {
	const { children, ...passThroughProps } = props;
	const childrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child, passThroughProps);
	});

	return (
		<div className='AppContainer'>
			{childrenWithProps}
			<Toaster alert={props.alert} resolveToast={props.clearAlert} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		alert: state.app.alert ? state.app.alert.APP : undefined
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		clearAlert: () => {
			return dispatch(clearAlert('APP'));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AppContainer)
);
