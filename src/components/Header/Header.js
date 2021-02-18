import React, {useState, useEffect} from 'react'
// styles
import './Header.sass'
// router-dom
import {NavLink, Link} from 'react-router-dom'
// content
import LionIcon from '../../images/icons/lionIcon.svg'
import {ReactComponent as CloseMenu} from '../../images/icons/closeMenuIcon.svg'
import {ReactComponent as OpenMenu} from '../../images/icons/openMenuIcon.svg'

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
	const [desktopMenu, setDesktopMenu] = useState(true)
	const [isBurgerOpened, setIsBurgerOpened] = useState(false)
	const checkResolution = () => {
		if(window.innerWidth <= 780){
			setDesktopMenu(false)
			console.log('меньше=false')
		}else{
			setDesktopMenu(true)
			setIsBurgerOpened(false)
			console.log('больше=true')
		}
	}

	useEffect(() => {
		checkResolution()
	})
	
	window.addEventListener('resize', checkResolution)

	return (
		<header className='header'>
			<div className="header__wrapper">
				<Link to='/' className="header__logo">Logo</Link>
				<nav className={`nav ${desktopMenu ? 'nav--desktop' : 'nav--mobile'} ${isBurgerOpened ? 'nav--mobile--active' : ''}`}>
					<ul className="nav__items">
						{ 
							navItems.map( (elem, index) => { 
								return	<li className="nav__item" key={`${elem.title}_${index}`} onClick={() => setIsBurgerOpened(false)}>
											<NavLink exact to={elem.path} activeClassName="nav__link--active" className="nav__link">{elem.title}</NavLink>
										</li>
							})
						}
					</ul>
				</nav>
				<div className="header__profile">
					<div className="header__profile-name">Name Namovich</div>
					<div className="header__profile-logo"><img src={LionIcon} alt="User Icon"/></div>
				</div>
				{
					!desktopMenu &&
						<>
							{isBurgerOpened ? <CloseMenu className='burger-icon' onClick={() => setIsBurgerOpened(false)}/> : <OpenMenu className='burger-icon' onClick={ () => setIsBurgerOpened(true)}/> }
						</>
				}
			</div>
		</header>
	)
}

export default Header
