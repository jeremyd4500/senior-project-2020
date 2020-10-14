export const PATHS = {
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

export const HEADER_TABS = {
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
