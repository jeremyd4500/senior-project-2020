import React from 'react';
import { Link } from 'react-router';
import AppWrapper from 'react/components/AppWrapper';
import { PATHS } from 'utils';

import './forgotPasswordContainer.less';

const ForgotPasswordContainer = (props) => {
	const [email, setEmail] = React.useState(null);

	return (
		<AppWrapper className='ForgotPasswordContainer'>
			<p className='ForgotPasswordContainer__title'>Forgot Password</p>
			<div className='ForgotPasswordContainer__form'>
				<div className='ForgotPasswordContainer__form-field'>
					<label className='ForgotPasswordContainer__form-field-label'>
						EMAIL ADDRESS
					</label>
					<input
						className='ForgotPasswordContainer__form-field-input'
						type='text'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='ForgotPasswordContainer__form-buttons'>
					<Link
						className='ForgotPasswordContainer__form-buttons-submit button'
						to={PATHS.login}
					>
						Submit
					</Link>
					<Link
						className='ForgotPasswordContainer__form-buttons-cancel button'
						to={PATHS.login}
					>
						Cancel
					</Link>
				</div>
			</div>
		</AppWrapper>
	);
};

export default ForgotPasswordContainer;
