import keyMirror from 'keymirror';
import axios from 'axios';

export const MESSAGE_ACTIONS = keyMirror({
	FETCH_MESSAGES: null,
	POST_MESSAGE: null
});

export const MESSAGE_ACTIONS_FAILURE = keyMirror({
	FETCH_MESSAGES_FAILURE: null,
	POST_MESSAGE_FAILURE: null
});

export const fetchMessages = () => {
	return (dispatch, getStore) => {
		const { token } = getStore().user;
		const path = 'http://localhost:8000/messages/inbox';
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
							type: MESSAGE_ACTIONS.FETCH_MESSAGES,
							messages: resp.data,
							path
						})
					);
				})
				.catch((err) => {
					reject(
						dispatch({
							type:
								MESSAGE_ACTIONS_FAILURE.FETCH_MESSAGES_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};
