import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Logo from 'images/Logo.png';
import { HEADER_TABS, PATHS } from 'utils';
import { appNavigate, logout } from 'state/actions';

const Header = ({ appNavigate, logout }) => (
	<div className='Header'>
		<Link className='Header__branding' to={PATHS.home}>
			<p className='Header__branding-name'>My Care</p>
			<img className='Header__branding-img' src={Logo} alt='Logo.png' />
		</Link>

		<div className='Header__tabs'>{renderTabs()}</div>

		<button className='Header__logout' onClick={() => logout(appNavigate)}>
			Logout
		</button>
	</div>
);

const renderTabs = () => {
	return HEADER_TABS.map((tab, index) => (
		<Link className='Header__tabs-tab' key={index} to={tab.path}>
			{tab.label}
		</Link>
	));
};

Header.propTypes = {
	appNavigate: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		appNavigate: (path) => dispatch(appNavigate(path, ownProps.router)),
		logout: (navigateFunc) => dispatch(logout(navigateFunc))
	};
};

export default withRouter(connect(null, mapDispatchToProps)(Header));
