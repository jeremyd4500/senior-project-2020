import { USER_ACTIONS } from '../actions';
import { assign } from 'lodash';

const initReducer = {
	authenticated: false
};

const UserReducer = (state = initReducer, action) => {
	switch (action.type) {
		case USER_ACTIONS.FETCH_USER_INFO: {
			return assign({}, state, {
				authenticated: action.authenticated
			});
		}
		case USER_ACTIONS.AUTHENTICATE: {
			return assign({}, state, {
				authenticated: action.authenticated
			});
		}
		default:
			return state;
	}
};

export default UserReducer;
