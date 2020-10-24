import keyMirror from 'keymirror';
import axios from 'axios';

export const APPOINTMENT_ACTIONS = keyMirror({
	FETCH_APPOINTMENTS: null,
	POST_APPOINTMENT: null
});

export const APPOINTMENT_ACTIONS_FAILURE = keyMirror({
	FETCH_APPOINTMENTS_FAILURE: null,
	POST_APPOINTMENT_FAILURE: null
});

export const fetchAppointments = () => {
	return (dispatch, getStore) => {
		const {
			token,
			info: { id }
		} = getStore().user;
		const path = `http://localhost:8000/appointment/`;
		// const path = `http://localhost:8000/appointment/${id}`;
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
							type: APPOINTMENT_ACTIONS.FETCH_APPOINTMENTS,
							appointments: resp.data,
							path
						})
					);
				})
				.catch((err) => {
					reject(
						dispatch({
							type:
								APPOINTMENT_ACTIONS_FAILURE.FETCH_APPOINTMENTS_FAILURE,
							error: err,
							path
						})
					);
				});
		}).catch((err) => {});
	};
};
