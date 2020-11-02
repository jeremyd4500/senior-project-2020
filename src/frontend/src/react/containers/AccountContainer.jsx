import React, { Component } from 'react';
import ProfilePic from 'images/defaultProfilePic.png';
import ModuleLayout from 'react/components/ModuleLayout';
import ContainerView from 'react/components/ContainerView';

class AccountContainer extends Component {
	render() {
		return (
			<ModuleLayout hasHeader>
				<ContainerView>
					<div className='AccountContainer'>
						<h1>Your Account</h1>
						<div className='AccountContainer_picture'>
							{this.renderProfilePic()}
						</div>
						<div className='AccountContainer_patientName'>
							{this.renderPatientName()}
						</div>
						<div className='AccountContainer_patientInfo'>
							{this.renderPatientInfoTable()}
						</div>
						<div className='AccountContainer_buttons'>
							{this.renderButtons()}
						</div>
					</div>
				</ContainerView>
			</ModuleLayout>
		);
	}

	renderProfilePic = () => {
		return (
			<img
				src={ProfilePic}
				alt='Profile picture'
				width='150'
				height='150'
			/>
		);
	};

	renderPatientName = () => {
		return <h3 id='patientName'>Chris Test</h3>;
	};

	renderPatientInfoTable = () => {
		return (
			<table id='patientInfoTable'>
				<tbody>
					<tr>
						<td>Username: </td>
						<td id='patientUsernameText'>ctest</td>
					</tr>
					<tr>
						<td>Email: </td>
						<td id='patientEmailText'>test@gmail.com</td>
					</tr>
					<tr>
						<td>Phone: </td>
						<td id='patientPhoneText'>(123)456-7890</td>
					</tr>
					<tr>
						<td>Address: </td>
						<td id='patientAddressText'>
							123 Test Way, Marietta GA 30067
						</td>
					</tr>
				</tbody>
			</table>
		);
	};

	renderButtons = () => {
		return (
			<div>
				<button id='editProfileBtn'>Edit Profile</button>
				<button id='backBtn'>Back</button>
			</div>
		);
	};
}

export default AccountContainer;
