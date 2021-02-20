import React from 'react'
// react-hook-form
import {useForm} from 'react-hook-form'
// react-router
import {useHistory} from 'react-router-dom'

function Form1({changeForm}) {
	const history = useHistory();
	const {register, handleSubmit, watch, errors, formState: {isValid}} = useForm({mode: "onChange"})

	const watchEmail = watch('email', '')
	const watchPassword = watch('password', '')

	const onSubmit = (data) => {
		console.log(data)
		return history.push('/catalog')
	}

	return (
		<form id='form1' onSubmit={handleSubmit(onSubmit)} className="profile__form" autoComplete="off">
			<div className={`input ${errors.email ? 'input--margin-error' : ''}`}>
				<label className={`input__label ${watchEmail ? 'input__label--active' : null}`} htmlFor="email">Email</label>
				<label className={`${(watchEmail && !errors.email) || isValid ? "input__pseudoelement-check-mark" : ""}`}>
					<input 
						className={`input__area ${errors.email ? 'input--error' : (watchEmail && !errors.email) || isValid ? "input--success" : ""}`}
						type="email" 
						name="email" 
						id="email"
						ref={register({
							required: "Required field",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "invalid email address"
							}
						})}
						onFocus={(e) => e.target.labels[0].classList.add('input__label--active')}
						onBlur={(e) => !e.target.value ? e.target.labels[0].classList.remove('input__label--active') : null}
					/>
				</label>
				{errors.email ? <span className='input--error-details'>{errors.email.message}</span> : null}
			</div>
			<div className={`input ${errors.password ? 'input--margin-error' : ''}`}>
				<label className={`input__label ${watchPassword ? 'input__label--active' : null}`} htmlFor="password">Password</label>
				<label className={`${(watchPassword && !errors.password) || isValid ? "input__pseudoelement-check-mark" : ""}`}>
					<input 
						className={`input__area ${errors.password ? 'input--error' : (watchPassword && !errors.password) || isValid ? "input--success" : ""}`}
						type="password" 
						name="password" 
						id="password"
						ref={register({
							required: "Required field",
							minLength: {
								value: 6,
								message: 'Minimum 6 symbols'
							},
						})}
						onFocus={(e) => e.target.labels[0].classList.add('input__label--active')}
						onBlur={(e) => !e.target.value ? e.target.labels[0].classList.remove('input__label--active') : null}
					/>
				</label>
				{errors.password ? <span className='input--error-details'>{errors.password.message}</span> : null}
			</div>
				<div className='profile__text'>Haven`t an account yet?<span className='accent-text' onClick={() => changeForm()}>&ensp;Registration</span></div>
		</form>
	)
}

export default Form1
