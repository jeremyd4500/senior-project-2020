import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ModuleLayout from 'react/components/ModuleLayout';
import ViewWrapper from 'react/components/ViewWrapper';
import InboxView from 'react/components/InboxView';
import AppointmentsView from 'react/components/AppointmentsView';
import { appNavigate, logout } from 'state/actions';
import { PATHS } from 'utils';

const LandingContainer = () => {
	return (
		<div className='LandingContainer'>
			<ModuleLayout hasHeader>
				<div className='LandingContainer__views'>
					<ViewWrapper type='Inbox' path={PATHS.inbox}>
						<InboxView />
					</ViewWrapper>
					<ViewWrapper type='Appointments' path={PATHS.appointments}>
						<AppointmentsView />
					</ViewWrapper>
				</div>
			</ModuleLayout>
		</div>
	);
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		appNavigate: (path) => dispatch(appNavigate(path, ownProps.router)),
		logout: (navigateFunc) => dispatch(logout(navigateFunc))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(LandingContainer));
