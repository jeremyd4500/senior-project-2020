import keyMirror from 'keymirror';
import axios from 'axios';

export const USER_ACTIONS = keyMirror({
	AUTHENTICATE: null,
	FETCH_USER_INFO: null,
	LOGOUT: null
});

export const registerUser = (data, navigateFunc) => {};
