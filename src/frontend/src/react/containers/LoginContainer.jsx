import React from 'react';
import { Link } from 'react-router';
import AppWrapper from 'react/components/AppWrapper';
import { PATHS } from 'utils';

import './loginContainer.less';

const LoginContainer = (props) => {
	const [email, setEmail] = React.useState(null);
	const [password, setPassword] = React.useState(null);

	return (
		<AppWrapper className='LoginContainer'>
			<p className='LoginContainer__title'>Login</p>
			<div className='LoginContainer__form'>
				<div className='LoginContainer__form-field'>
					<label className='LoginContainer__form-field-label'>
						EMAIL ADDRESS
					</label>
					<input
						className='LoginContainer__form-field-input'
						type='text'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className='LoginContainer__form-field'>
					<label className='LoginContainer__form-field-label'>
						PASSWORD
					</label>
					<input
						className='LoginContainer__form-field-input'
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='LoginContainer__form-help'>
					<Link
						className='LoginContainer__form-help-btn button'
						to={PATHS.register}
					>
						CREATE ACCOUNT
					</Link>
					<Link
						className='LoginContainer__form-help-btn button'
						to={PATHS.forgotPassword}
					>
						FORGOT PASSWORD
					</Link>
				</div>
				<Link
					className='LoginContainer__form-submit button'
					to={PATHS.home}
				>
					Submit
				</Link>
			</div>
		</AppWrapper>
	);
};

export default LoginContainer;
