import React, { Component } from 'react';
import ProfilePic from 'images/defaultProfilePic.png';
import ModuleLayout from 'react/components/ModuleLayout';
import ContainerView from 'react/components/ContainerView';

class EditAccountContainer extends Component {
	render() {
		return (
			<ModuleLayout hasHeader>
				<ContainerView>
					<div className='AccountContainer'>
						<h1>Edit Account Information</h1>
						<div className='AccountContainer_patientInfo'>
							{this.renderPatientInfoTable()}
						</div>
					</div>
				</ContainerView>
			</ModuleLayout>
		);
	}

	renderPatientInfoTable = () => {
		return (
			<form id='editPatientInfoForm' method='post'>
				<label>First Name: </label>
				<input id='firstNameInput' type='text' name='firstName' />

				<label>Last Name: </label>
				<input id='lastNameInput' type='text' name='lastName' />

				<label>Username: </label>
				<input id='usernameInput' type='text' name='username' />

				<label>Email: </label>
				<input id='emailInput' type='text' name='email' />

				<label>Phone</label>
				<input id='phoneInput' type='text' name='phone' />

				<label>Street Address: </label>
				<input
					id='streetAddressInput'
					type='text'
					name='streetAddress'
				/>

				<label>City: </label>
				<input id='cityInput' type='text' name='city' />

				<label>State: </label>
				<input id='stateInput' type='text' name='state' />

				<label>Zip Code: </label>
				<input id='zipInput' type='text' name='zipCode' />

				<br />
				<input
					id='submitBtn'
					type='submit'
					name='submit'
					value='Update Info'
				/>
			</form>
		);
	};
}

export default EditAccountContainer;
