import React from 'react';
import { Link, withRouter } from 'react-router';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import AppWrapper from 'react/components/AppWrapper';
import SelectMenu from 'react/components/SelectMenu';
import {
	getSelectMenuOptionsArray,
	getSelectMenuOptionsObject,
	PATHS,
	SEX,
	STATES
} from 'utils';
import { registerUser } from 'state/actions';

const RegisterContainer = (props) => {
	const [firstName, setFirstName] = React.useState(null);
	const [lastName, setLastName] = React.useState(null);
	const [username, setUsername] = React.useState(null);
	const [phone, setPhone] = React.useState(null);
	const [email, setEmail] = React.useState(null);
	const [password, setPassword] = React.useState(null);
	const [confirmPassword, setConfirmPassword] = React.useState(null);
	const [address, setAddress] = React.useState(null);
	const [city, setCity] = React.useState(null);
	const [state, setState] = React.useState(null);
	const [birthday, setBirthday] = React.useState(new Date());
	const [sex, setSex] = React.useState(null);
	const [heightFeet, setHeightFeet] = React.useState(null);
	const [heightInches, setHeightInches] = React.useState(null);
	const [weight, setWeight] = React.useState(null);

	const isValid = () => {
		if (
			address &&
			birthday &&
			city &&
			confirmPassword &&
			email &&
			firstName &&
			heightFeet &&
			heightInches &&
			lastName &&
			password &&
			phone &&
			sex &&
			username &&
			weight
		) {
			return true;
		} else {
			return false;
		}
	};

	const renderSexSelector = () => {
		const options = getSelectMenuOptionsArray(SEX);
		return (
			<SelectMenu value={sex} handleChange={setSex} options={options} />
		);
	};

	const renderStateSelector = () => {
		const options = getSelectMenuOptionsObject(STATES);
		return (
			<SelectMenu
				value={state}
				handleChange={setState}
				options={options}
			/>
		);
	};

	console.log('############################');
	console.log(props);
	console.log({
		address: address,
		birthday: birthday,
		city: city,
		confirmPassword: confirmPassword,
		email: email,
		firstName: firstName,
		heightFeet: heightFeet,
		heightInches: heightInches,
		lastName: lastName,
		password: password,
		phone: phone,
		sex: sex,
		state: state,
		username: username,
		weight: weight
	});

	return (
		<AppWrapper className='RegisterContainer'>
			<p className='RegisterContainer__title'>Create Account</p>
			<div className='RegisterContainer__form'>
				<div className='RegisterContainer__form-field-multi'>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							FIRST NAME
						</label>
						<input
							className='RegisterContainer__form-field-input'
							type='text'
							placeholder='First Name'
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</div>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							LAST NAME
						</label>
						<input
							className='RegisterContainer__form-field-input'
							type='text'
							placeholder='Last Name'
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='RegisterContainer__form-field-multi'>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							USERNAME
						</label>
						<input
							className='RegisterContainer__form-field-input'
							type='text'
							placeholder='Username'
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							PHONE NUMBER
						</label>
						<input
							className='RegisterContainer__form-field-input'
							type='text'
							placeholder='Phone Number'
							onChange={(e) => setPhone(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='RegisterContainer__form-field'>
					<label className='RegisterContainer__form-field-label'>
						EMAIL ADDRESS
					</label>
					<input
						className='RegisterContainer__form-field-input'
						type='text'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className='RegisterContainer__form-field'>
					<label className='RegisterContainer__form-field-label'>
						STREET ADDRESS
					</label>
					<input
						className='RegisterContainer__form-field-input'
						type='text'
						placeholder='Address'
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</div>
				<div className='RegisterContainer__form-field-multi'>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							CITY
						</label>
						<input
							className='RegisterContainer__form-field-input'
							type='text'
							placeholder='City'
							onChange={(e) => setCity(e.target.value)}
							required
						/>
					</div>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							STATE
						</label>
						{renderStateSelector()}
					</div>
				</div>
				<div className='RegisterContainer__form-field-multi'>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							DATE OF BIRTH
						</label>
						<DatePicker onChange={setBirthday} value={birthday} />
					</div>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							SEX
						</label>
						{renderSexSelector()}
					</div>
				</div>
				<div className='RegisterContainer__form-field-multi'>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							HEIGHT
						</label>
						<div className='RegisterContainer__form-field-dual-input'>
							<div className='RegisterContainer__form-field-dual-input-pair'>
								<input
									type='number'
									className='RegisterContainer__form-field-dual-input-pair-input'
									min='0'
									max='10'
									onChange={(e) =>
										setHeightFeet(e.target.value)
									}
									required
								/>
								<label className='RegisterContainer__form-field-dual-input-pair-label'>
									Feet
								</label>
							</div>
							<div className='RegisterContainer__form-field-dual-input-pair'>
								<input
									type='number'
									className='RegisterContainer__form-field-dual-input-pair-input'
									min='0'
									max='11'
									onChange={(e) =>
										setHeightInches(e.target.value)
									}
									required
								/>
								<label className='RegisterContainer__form-field-dual-input-pair-label'>
									Inches
								</label>
							</div>
						</div>
					</div>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							WEIGHT
						</label>
						<div className='RegisterContainer__form-field-single-input'>
							<input
								type='number'
								className='RegisterContainer__form-field-single-input-input'
								min='0'
								max='1000'
								onChange={(e) => setWeight(e.target.value)}
								required
							/>
							<label className='RegisterContainer__form-field-single-input-label'>
								Pounds
							</label>
						</div>
					</div>
				</div>
				<div className='RegisterContainer__form-field'>
					<label className='RegisterContainer__form-field-label'>
						PASSWORD
					</label>
					<input
						className='RegisterContainer__form-field-input'
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div className='RegisterContainer__form-field'>
					<label className='RegisterContainer__form-field-label'>
						CONFIRM PASSWORD
					</label>
					<input
						className='RegisterContainer__form-field-input'
						type='password'
						placeholder='Password'
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<div className='RegisterContainer__form-buttons'>
					<button
						className='RegisterContainer__form-buttons-submit button'
						disabled={!isValid()}
						onClick={() => {
							// authenticate
						}}
						type='submit'
					>
						Submit
					</button>
					<Link
						className='RegisterContainer__form-buttons-cancel button'
						to={PATHS.login}
					>
						Cancel
					</Link>
				</div>
			</div>
		</AppWrapper>
	);
};

const mapDispatchToProps = {
	registerUser
};

export default withRouter(connect(null, mapDispatchToProps)(RegisterContainer));
