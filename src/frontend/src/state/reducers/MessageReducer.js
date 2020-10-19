import { MESSAGE_ACTIONS, MESSAGE_ACTIONS_FAILURE } from 'state/actions';
import { assign } from 'lodash';

const initReducer = {
	messages: {}
};

const MessageReducer = (state = initReducer, action) => {
	switch (action.type) {
		case MESSAGE_ACTIONS.FETCH_MESSAGES: {
			return assign({}, state, {
				messages: action.messages
			});
		}
		default:
			return state;
	}
};

export default MessageReducer;
