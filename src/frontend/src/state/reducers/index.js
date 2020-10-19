import { combineReducers } from 'redux';
import { USER_ACTIONS } from 'state/actions';

import AppReducer from 'state/reducers/AppReducer';
import UserReducer from 'state/reducers/UserReducer';
import MessageReducer from 'state/reducers/MessageReducer';
import AppointmentReducer from 'state/reducers/AppointmentReducer';

const reducers = combineReducers({
	app: AppReducer,
	appointments: AppointmentReducer,
	messages: MessageReducer,
	user: UserReducer
});

const rootReducer = (state, action) => {
	if (action.type === USER_ACTIONS.LOGOUT) {
		state = undefined;
	}
	return reducers(state, action);
};

export default rootReducer;
