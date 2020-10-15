import keyMirror from 'keymirror';
import axios from 'axios';
import { APP_ACTIONS } from 'state/actions';
import { STATUS } from 'utils';
import { PATHS } from '../../utils/constants';

export const USER_ACTIONS = keyMirror({
	AUTHENTICATE: null,
	FETCH_TOKEN: null,
	FETCH_USER_INFO: null,
	LOGOUT: null,
	REGISTER: null
});

export const USER_ACTIONS_FAILURE = keyMirror({
	AUTHENTICATE_FAILURE: null,
	FETCH_TOKEN_FAILURE: null,
	FETCH_USER_INFO_FAILURE: null,
	LOGOUT_FAILURE: null,
	REGISTER_FAILURE: null
});

export const authenticateUser = (data, navigateFunc) => {
	const path = 'http://localhost:8000/auth/token/login/';
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			axios
				.post(path, data)
				.then((resp) => {
					localStorage.setItem('token', resp.data.auth_token);
					dispatch({
						type: USER_ACTIONS.AUTHENTICATE,
						token: resp.data.auth_token,
						authenticated: true,
						path
					});
					resolve(navigateFunc(PATHS.home));
				})
				.catch((err) => {
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message: 'Incorrect username or password.',
						clears: true,
						status: STATUS.ERROR,
						path
					});
					reject(
						dispatch({
							type: USER_ACTIONS_FAILURE.AUTHENTICATE_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};

export const registerUser = (data, navigateFunc) => {
	const path = 'http://localhost:8000/auth/users/';
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			axios
				.post(path, data)
				.then(() => {
					dispatch({
						type: USER_ACTIONS.REGISTER,
						data: data,
						path
					});
					resolve(navigateFunc(PATHS.login));
				})
				.catch((err) => {
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message:
							'Sorry! There was an error creating your account.',
						clears: true,
						status: STATUS.ERROR,
						path
					});
					reject(
						dispatch({
							type: USER_ACTIONS_FAILURE.REGISTER_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};

export const fetchToken = () => {
	return (dispatch, getStore) => {
		return new Promise((resolve, reject) => {
			const token = localStorage.getItem('token');
			const stateToken = getStore().user.token;
			if (token === stateToken) {
				resolve(
					dispatch({
						type: USER_ACTIONS.FETCH_TOKEN,
						token: stateToken
					})
				);
			} else {
				if (token) {
					resolve(
						dispatch({
							type: USER_ACTIONS.FETCH_TOKEN,
							token: token
						})
					);
				} else {
					reject(
						dispatch({
							type: USER_ACTIONS_FAILURE.FETCH_TOKEN_FAILURE
						})
					);
				}
			}
		});
	};
};

export const fetchUserInfo = () => {
	const path = 'http://localhost:8000/auth/users/me';
	return (dispatch, getStore) => {
		const { token } = getStore().user;
		return new Promise((resolve, reject) => {
			axios
				.get(path, {
					headers: {
						Authorization: `Token ${token}`
					}
				})
				.then((resp) => {
					resolve(
						dispatch({
							type: USER_ACTIONS.FETCH_USER_INFO,
							authenticated: true,
							info: {
								firstName: resp.data.first_name,
								last_name: resp.data.last_name,
								sex: resp.data.sex,
								dob: resp.data.date_of_birth,
								email: resp.data.email,
								phone: resp.data.phone,
								address: resp.data.address,
								city: resp.data.city,
								state: resp.data.state,
								id: resp.data.id,
								username: resp.data.username
							},
							path
						})
					);
				})
				.catch((err) => {
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message: 'Sorry! We are unable to fetch your account.',
						clears: true,
						status: STATUS.WARNING,
						path
					});
					reject(
						dispatch({
							type: USER_ACTIONS_FAILURE.FETCH_USER_INFO_FAILURE,
							error: err.message,
							authenticated: false,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};
