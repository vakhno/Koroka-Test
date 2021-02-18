import React from 'react'
// styles
import './CourseCart.sass'
// content
import LessonsIcon from '../../images/icons/lessonsIcon.svg'
import TasksIcon from '../../images/icons/tasksIcon.svg'
import MinutesIcon from '../../images/icons/minutesIcon.svg'

function CourseCart({name, bg, progress, icon, title, lessons, tasks, minutes, country}) {
	return (
		<div className="course-cart">
			<div className="course-cart__wrapper">
				<div className="course-cart__top" style={{backgroundImage: `url(${Object.values(bg)[0]})`}}>
					<div className="course-cart__progressbar" style={{maxWidth:`${progress}%`}}>
						<span className="course-cart__progressbar-info">Progress {progress}%</span>
					</div>
					<div className="course-cart__author-info">
						<div className="course-cart__avatar">
							<img src={icon} alt="Author avatar"/>
						</div>
						<div className="course-cart__name">{name}</div>
					</div>
				</div>
				<div className="course-cart__bottom">
					<div className="course-cart__title">{title}</div>
					<div className="course-cart__course-info">
						<div className="course-cart__course-info-item">
							<img src={LessonsIcon} alt="Lessons icon"/>
							<span>{lessons} lessons</span>
						</div>
						<div className="course-cart__course-info-item">
							<img src={TasksIcon} alt="Tasks icon"/>
							<span>{tasks} tasks</span>
						</div>
						<div className="course-cart__course-info-item">
							<img src={MinutesIcon} alt="Minutes icon"/>
							<span>{minutes} minutes</span>
						</div>
					</div>
					<div className="course-cart__buttons-block">
						<button type='button' className='button button--secondary'>Continue</button>
						<button type='button' className='button button--flat'>More</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CourseCart
