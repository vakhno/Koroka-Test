import React, {useState} from 'react'
// styles
import './SignIn.sass'
// components
import Form1 from './Form1'
import Form2 from './Form2'
// content
import VK from '../../images/social/vk.svg'
import Chrome from '../../images/social/chrome.svg'
import Facebook from '../../images/social/facebook.svg'

function SignIn() {
	const [signInActive, setSignInActive] = useState(false)
	const socialSignInLinks = [
		{
			title: 'VK',
			icon: VK,
		},
		{
			title: 'Facebook',
			icon: Facebook,
		},
		{
			title: 'Chrome',
			icon: Chrome,
		},
	]

	return (
		<div className="profile">
			<div className="profile__header">
				<div className="profile__title">Profile</div>
				<ul className="profile__links">
					<li className={`profile__link ${!signInActive && 'profile__link--active'}`} onClick={() => setSignInActive(false)}>Registration</li>
					<li className={`profile__link ${signInActive && 'profile__link--active'}`} onClick={() => setSignInActive(true)}>Sign in</li>
				</ul>
			</div>
			<div className="profile__social-connect">
				<span className="profile__social-losung">You can sign in with social</span>
				<ul className="profile__social-links">
					{
						socialSignInLinks.map( (elem,index) => {
							return <li className="profile__social-link" key={`elem.title_${index}`}><img src={elem.icon} alt={`Sign In with ${elem.title}`}/></li>
						})
					}
				</ul>
			</div>
			<div className="profile__connection-fields">
				{
					signInActive ? <Form1 changeForm={() => setSignInActive(false)}/> : <Form2/>
				}
				<div className="profile__buttons">
					<button type='submit' form='form2' className='button button--primary'>Registration</button>
					<button type='submit' form={`${signInActive ? 'form1' : null }`} className='button button--flat'>Sign in</button>
				</div>
			</div>
		</div>
	)
}
export default SignIn
