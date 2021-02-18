import React from 'react'
// styles
import './Catalog.sass'
// content
import Avatar1 from '../../images/avatars/avatar1.png'
import BG1 from '../../images/bg/bg1.jpg'
import Avatar2 from '../../images/avatars/avatar2.png'
import BG2 from '../../images/bg/bg2.jpg'
import Avatar3 from '../../images/avatars/avatar3.png'
import BG3 from '../../images/bg/bg3.jpg'
// components
import CourseCart from '../../components/CourseCart/CourseCart'
import {ReactComponent as Search} from '../../images/icons/searchIcon.svg'
// react-hook-form
import {useForm} from 'react-hook-form'

function Catalog() {
	const {register, handleSubmit, watch} = useForm()
	const watchSearchCountry = watch('searchCountry', false)
	const lessonsBlocks = [
		{
			progress: 12,
			name: 'Alexa',
			icon: Avatar1,
			bg: {BG1},
			title: 'Take exam in Mathematics at 100 points',
			lessons: 12,
			tasks: 12,
			minutes: 30,
			country: 'USA',
		},
		{
			progress: 57,
			name: 'Kathryn Nguyen',
			icon: Avatar2,
			bg: {BG2},
			title: 'How buy new clothes without money in USA',
			lessons: 12,
			tasks: 12,
			minutes: 30,
			country: 'USA',
		},
		{
			progress: 97,
			name: 'Diane Miles',
			icon: Avatar3,
			bg: {BG3},
			title: 'Why people hate me?',
			lessons: 12,
			tasks: 12,
			minutes: 30,
			country: 'USA',
		}
	]

	return (
		<div className='catalog'>
			<div className="catalog__container">
				<div className="catalog__page-info">
					<h2 className="catalog__title">Course catalog</h2>
					<div className="catalog__text">Each course contains video lectures, tasks, and text materials. All courses viewed by you are displayed in your personal account</div>
				</div>
			</div>
			<form className="catalog__search-form">
				<div className="input-search">
					<input type="search" placeholder="Search" className='input-search__area'/>
					<Search className="input-search__icon-search"/>
				</div>
				<div className="datalist">
					<label className={`datalist__label ${watchSearchCountry ? 'datalist__label--active' : null}`} htmlFor="searchCountry">Your country</label>
					<input
						name='searchCountry'
						id="searchCountry" 
						className={`datalist__area`}
						list="country-list"
						ref={register({
							required: false
						})}
						onFocus={(e) => e.target.labels[0].classList.add('datalist__label--active')}
						onBlur={(e) => !e.target.value ? e.target.labels[0].classList.remove('datalist__label--active') : null}
					/>
					<datalist id="country-list">
						<option defaultValue=""></option>
						<option value="USA">USA</option>
						<option value="Austria">Austria</option>
						<option value="Brazil">Brazil</option>
						<option value="Germany">Germany</option>
						<option value="Ukraine">Ukraine</option>
						<option value="Portugal">Portugal</option>
					</datalist>
				</div> 
			</form>
			<div className="catalog__courses">
				{
					lessonsBlocks.map((elem, index) => {
						return <CourseCart name={elem.name} bg={elem.bg} progress={elem.progress} icon={elem.icon} title={elem.title} lessons={elem.lessons} tasks={elem.tasks} minutes={elem.minutes} country={elem.country} key={`${elem.name}_${index}`}/>
					})
				}
			</div>
		</div>
	)
}

export default Catalog
