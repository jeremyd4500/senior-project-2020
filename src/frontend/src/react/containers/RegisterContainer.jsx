import React from 'react';
import { Link } from 'react-router';
import DatePicker from 'react-date-picker';
import AppWrapper from 'react/components/AppWrapper';
import SelectMenu from 'react/components/SelectMenu';
import { PATHS } from 'utils';

import './registerContainer.less';

const RegisterContainer = (props) => {
	const [firstName, setFirstName] = React.useState(null);
	const [lastName, setLastName] = React.useState(null);
	const [email, setEmail] = React.useState(null);
	const [password, setPassword] = React.useState(null);
	const [birthday, setBirthday] = React.useState(new Date());
	const [sex, setSex] = React.useState(null);
	const [heightFeet, setHeightFeet] = React.useState(null);
	const [heightInches, setHeightInches] = React.useState(null);
	const [weight, setWeight] = React.useState(null);

	const renderSelectMenu = () => {
		const options = [
			{
				value: 'male',
				label: 'Male'
			},
			{
				value: 'female',
				label: 'Female'
			},
			{
				value: 'other',
				label: 'Other'
			}
		];

		return (
			<SelectMenu value={sex} handleChange={setSex} options={options} />
		);
	};

	const isValid = () => {
		if (
			firstName &&
			lastName &&
			email &&
			password &&
			birthday &&
			sex &&
			heightFeet &&
			heightInches &&
			weight
		) {
			return true;
		} else {
			return false;
		}
	};

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
							placeholder='Name'
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							LAST NAME
						</label>
						<input
							className='RegisterContainer__form-field-input'
							type='text'
							placeholder='Name'
							onChange={(e) => setLastName(e.target.value)}
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
					/>
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
					/>
				</div>
				<div className='RegisterContainer__form-field-multi'>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							BIRTHDAY
						</label>
						<DatePicker onChange={setBirthday} value={birthday} />
					</div>
					<div className='RegisterContainer__form-field multi'>
						<label className='RegisterContainer__form-field-label'>
							SEX
						</label>
						{renderSelectMenu()}
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
							/>
							<label className='RegisterContainer__form-field-single-input-label'>
								Pounds
							</label>
						</div>
					</div>
				</div>
				<div className='RegisterContainer__form-buttons'>
					<button
						className='RegisterContainer__form-buttons-submit button'
						disabled={!isValid()}
						onClick={() => {
							// authenticate
						}}
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

export default RegisterContainer;
