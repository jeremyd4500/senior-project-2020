import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions';
import UserReducer from './UserReducer';

const reducers = combineReducers({
	user: UserReducer
});

const rootReducer = (state, action) => {
	if (action.type === USER_ACTIONS.LOGOUT) {
		state = undefined;
	}
	return reducers(state, action);
};

export default rootReducer;
