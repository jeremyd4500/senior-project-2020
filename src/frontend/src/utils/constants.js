import KeyMirror from 'keymirror';

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

export const SEX = { Male: 0, Female: 1 };

export const STATES = {
	Alabama: 'AL',
	Alaska: 'AK',
	Arizona: 'AZ',
	Arkansas: 'AR',
	California: 'CA',
	Colorado: 'CO',
	Connecticut: 'CT',
	Delaware: 'DE',
	Florida: 'FL',
	Georgia: 'GA',
	Hawaii: 'HI',
	Idaho: 'ID',
	Illinois: 'IL',
	Indiana: 'IN',
	Iowa: 'IA',
	Kansas: 'KS',
	Kentucky: 'KY',
	Louisiana: 'LA',
	Maine: 'ME',
	Maryland: 'MD',
	Massachusetts: 'MA',
	Michigan: 'MI',
	Minnesota: 'MN',
	Mississippi: 'MS',
	Missouri: 'MO',
	Montana: 'MT',
	Nebraska: 'NE',
	Nevada: 'NV',
	'New Hampshire': 'NH',
	'New Jersey': 'NJ',
	'New Mexico': 'NM',
	'New York': 'NY',
	'North Carolina': 'NC',
	'North Dakota': 'ND',
	Ohio: 'OH',
	Oklahoma: 'OK',
	Oregon: 'OR',
	Pennsylvania: 'PA',
	'Rhode Island': 'RI',
	'South Carolina': 'SC',
	'South Dakota': 'SD',
	Tennessee: 'TN',
	Texas: 'TX',
	Utah: 'UT',
	Vermont: 'VT',
	Virginia: 'VA',
	Washington: 'WA',
	'West Virginia': 'WV',
	Wisconsin: 'WI',
	Wyoming: 'WY'
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

export const STATUS = KeyMirror({
	ERROR: null,
	INFO: null,
	PENDING: null,
	SUCCESS: null,
	UNKNOWN: null,
	WARNING: null
});
