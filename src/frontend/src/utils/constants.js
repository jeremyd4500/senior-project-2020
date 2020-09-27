const PATHS = {
	// jsx paths
	root: '/',

	home: '/home',
	account: '/account',
	appointments: '/appointments',
	about: '/about',
	contact: '/contact',

	login: '/login',
	register: '/register',
	forgotPassword: '/forgotPassword',
	resetPassword: '/resetPassword'

	// api paths
};

const HEADER_TABS = {
	home: [
		{
			label: 'Account',
			path: PATHS.account
		},
		{
			label: 'Appointments',
			path: PATHS.appointments
		},
		{
			label: 'About Us',
			path: PATHS.about
		},
		{
			label: 'Contact',
			path: PATHS.contact
		}
	]
};

module.exports = {
	HEADER_TABS,
	PATHS
};
