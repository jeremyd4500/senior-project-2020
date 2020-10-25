import keyMirror from 'keymirror';
import axios from 'axios';

export const MESSAGE_ACTIONS = keyMirror({
	DELETE_THREAD: null,
	FETCH_MESSAGES: null,
	FETCH_THREAD_MESSAGES: null,
	REPLY_MESSAGE: null,
	SEND_MESSAGE: null
});

export const MESSAGE_ACTIONS_FAILURE = keyMirror({
	DELETE_THREAD_FAILURE: null,
	FETCH_MESSAGES_FAILURE: null,
	FETCH_THREAD_MESSAGES_FAILURE: null,
	REPLY_MESSAGE_FAILURE: null,
	SEND_MESSAGE_FAILURE: null
});

export const fetchMessages = () => {
	return (dispatch, getStore) => {
		const { token } = getStore().user;
		const path = 'http://localhost:8000/messages/inbox/';
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

export const fetchThreadMessages = (thread_id) => {
	return (dispatch, getStore) => {
		const { token } = getStore().user;
		const path = `http://localhost:8000/messages/message/${thread_id}/`;
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
							type: MESSAGE_ACTIONS.FETCH_THREAD_MESSAGES,
							thread: resp.data,
							path
						})
					);
				})
				.catch((err) => {
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message:
							'Oops! There was an error finding these messages...',
						clears: true,
						status: STATUS.ERROR,
						path
					});
					reject(
						dispatch({
							type:
								MESSAGE_ACTIONS_FAILURE.FETCH_THREAD_MESSAGES_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};

export const sendMessage = (data, user_id) => {
	return (dispatch, getStore) => {
		const { token } = getStore().user;
		const path = `http://localhost:8000/messages/message/thread/${user_id}/send/`;
		return new Promise((resolve, reject) => {
			axios
				.post(
					path,
					{
						message: data.message,
						subject: data.subject
					},
					{
						headers: {
							Authorization: `Token ${token}`
						}
					}
				)
				.then((resp) => {
					dispatch(fetchMessages());
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message: 'Done! Your message was sent',
						clears: true,
						status: STATUS.SUCCESS,
						path
					});
					resolve(
						dispatch({
							type: MESSAGE_ACTIONS.SEND_MESSAGE,
							// thread: resp.data,
							path
						})
					);
				})
				.catch((err) => {
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message:
							'Oops! There was a problem sending the message...',
						clears: true,
						status: STATUS.ERROR,
						path
					});
					reject(
						dispatch({
							type: MESSAGE_ACTIONS_FAILURE.SEND_MESSAGE_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};

export const replyMessage = (data, thread_id, user_id) => {
	return (dispatch, getStore) => {
		const { token } = getStore().user;
		const path = `http://localhost:8000/messages/message/thread/${thread_id}/${user_id}/send/`;
		return new Promise((resolve, reject) => {
			axios
				.post(
					path,
					{
						message: data.message
					},
					{
						headers: {
							Authorization: `Token ${token}`
						}
					}
				)
				.then((resp) => {
					dispatch(fetchMessages());
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message: 'Done! Your message was sent',
						clears: true,
						status: STATUS.SUCCESS,
						path
					});
					resolve(
						dispatch({
							type: MESSAGE_ACTIONS.REPLY_MESSAGE,
							// thread: resp.data,
							path
						})
					);
				})
				.catch((err) => {
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message:
							'Oops! There was a problem sending the message...',
						clears: true,
						status: STATUS.ERROR,
						path
					});
					reject(
						dispatch({
							type: MESSAGE_ACTIONS_FAILURE.REPLY_MESSAGE_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};

export const deleteThread = (thread_id) => {
	return (dispatch, getStore) => {
		const { token } = getStore().user;
		const path = `http://localhost:8000/messages/thread/${thread_id}/delete/`;
		return new Promise((resolve, reject) => {
			axios
				.post(
					path,
					{},
					{
						headers: {
							Authorization: `Token ${token}`
						}
					}
				)
				.then((resp) => {
					dispatch(fetchMessages());
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message: 'Done! We deleted that for you.',
						clears: true,
						status: STATUS.SUCCESS,
						path
					});
					resolve(
						dispatch({
							type: MESSAGE_ACTIONS.DELETE_THREAD,
							// thread: resp.data,
							path
						})
					);
				})
				.catch((err) => {
					dispatch({
						type: APP_ACTIONS.ALERT_ADD,
						alert: 'APP',
						message: 'Oops! There was a problem deleting that...',
						clears: true,
						status: STATUS.ERROR,
						path
					});
					reject(
						dispatch({
							type: MESSAGE_ACTIONS_FAILURE.DELETE_THREAD_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};
