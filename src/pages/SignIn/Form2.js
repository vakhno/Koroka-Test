import React, {useState} from 'react'
// react-hook-form
import {useForm} from 'react-hook-form'
// components
import PrivicyPolice from '../../components/Modal/PrivicyPolice'
// react-router
import {useHistory} from 'react-router-dom'

function Form2() {
	const history = useHistory();
	const {register, handleSubmit, watch, errors, formState: {isValid}} = useForm()
	const [privacyPoliceModal, setPrivacyPoliceModal] = useState(false)

	const watchName = watch('name', '')
	const watchEmail = watch('email', '')
	const watchPhone = watch('phone', '')
	
	const onSubmit = (data) => {
		console.log(data)
		return history.push('/catalog')
	}
	
	return (
		<form id="form2" onSubmit={handleSubmit(onSubmit)} className="profile__form">
			<div className={`input ${errors.name ? 'input--margin-error' : ''}`}>
				<label className={`input__label`} htmlFor="name">Your name</label>
				<input 
					className={`input__area ${errors.name ? 'input--error' : (watchName && !errors.name) || isValid ? "input--success" : ""}`} 
					type="text" 
					name="name"
					id="name"
					ref={register({
						required: "Required field",
						minLength: {
							value: 2,
							message: 'Minimum 2 symbols'
						},
						maxLength: {
							value: 12,
							message: 'Maximum 12 symbols'
						},
					})}
					onFocus={(e) => e.target.labels[0].classList.add('input__label--active')}
					onBlur={(e) => !e.target.value ? e.target.labels[0].classList.remove('input__label--active') : null}
				/>
				{errors.name ? <span className='input--error-details'>{errors.name.message}</span> : ''}
			</div>
			<div className={`input ${errors.email ? 'input--margin-error' : ''}`}>
				<label className="input__label" htmlFor="email">E-mail</label>
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
				{errors.email ? <span className='input--error-details'>{errors.email.message}</span> : ''}
			</div>
			<div className={`input ${errors.phone ? 'input--margin-error' : ''}`}>
				<label className="input__label" htmlFor="phone">Phone</label>
				<input 
					className={`input__area ${errors.phone ? 'input--error' : (watchPhone && !errors.phone) || isValid ? "input--success" : ""}`} 
					type="tel" 
					name="phone" 
					id="phone"
					ref={register({
						required: "Required field",
						minLength: {
							value: 6,
							message: 'Minimum 6 symbol'
						},
						maxLength: {
							value: 12,
							message: 'Maximum length is 12 symbols'
						},
						pattern: {
							value: /^-?[0-9]\d*\.?\d*$/,
							message: "Must include only numbers"
						}
					})}	
					onFocus={(e) => e.target.labels[0].classList.add('input__label--active')}
					onBlur={(e) => !e.target.value ? e.target.labels[0].classList.remove('input__label--active') : null}
				/>
				{errors.phone ? <span className='input--error-details'>{errors.phone.message}</span> : ''}
			</div>
			<label htmlFor="checkRules" className={`checkbox ${errors.checkRules ? 'checkbox--error' : ''}`}>
				<input 
					type="checkbox"
					name="checkRules"
					value="confirmedRules"
					className={`checkbox__input`}
					ref={register({
						required: "Required field",
					})}	
				/><span>I accept the terms of the offer of<span className='accent-text' onClick={ () => setPrivacyPoliceModal(true)}>&ensp;the privacy policy</span></span>
			</label>
			<PrivicyPolice isOpen={privacyPoliceModal} onClose={() => setPrivacyPoliceModal(false)}/>
		</form>
	)
}

export default Form2
