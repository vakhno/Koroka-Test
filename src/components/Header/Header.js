import React from 'react'
// styles
import './Header.sass'
// router-dom
import {NavLink, Link} from 'react-router-dom'
// content
import LionIcon from '../../images/icons/lionIcon.svg'


function Header() {
	const navItems = [
		{
			title: "Free test",
			path: "/test",
		},
		{
			title: "Catalog",
			path: "/catalog",
		},
		{
			title: "Help",
			path: "/help",
		},
	]

	return (
		<header className='header'>
			<div className="header__wrapper">
				<Link to='/' className="header__logo">Logo</Link>
				<nav className="header__nav">
					<ul className="header__nav-items">
						{ 
							navItems.map( (elem, index) => { 
								return	<li className="header__nav-item" key={`${elem.title}_${index}`}>
											<NavLink exact to={elem.path} activeClassName="header__nav-link--active" className="header__nav-link">{elem.title}</NavLink>
										</li>
							})
						}
					</ul>
				</nav>
				<div className="header__profile">
					<div className="header__profile-name">Name Namovich</div>
					<div className="header__profile-logo"><img src={LionIcon} alt="User Icon"/></div>
				</div>
			</div>
		</header>
	)
}

export default Header
