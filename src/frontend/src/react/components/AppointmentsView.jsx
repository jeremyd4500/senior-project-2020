import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppointments } from 'state/actions';

class AppointmentsView extends Component {
	componentDidMount() {
		this.props.fetchAppointments();
	}
	render() {
		return (
			<div className='AppointmentsView'>{this.renderAppointments()}</div>
		);
	}

	renderAppointments = () => {
		const { appointments } = this.props;
		if (!appointments || !appointments.length) {
			return (
				<p className='AppointmentsView__none'>
					You have no appointments
				</p>
			);
		} else {
			return appointments.map((appointment, index) => (
				<div className='AppointmentsView__item' key={index}>
					{`Appointment ${index}`}
					// do something with appointment data
				</div>
			));
		}
	};
}

const mapStateToProps = (state) => {
	return {
		appointments: state.appointments
	};
};

const mapDispatchToProps = {
	fetchAppointments
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsView);
