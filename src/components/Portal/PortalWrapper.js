import React from 'react'
// styles
import './Portal.sass'
// components
import Portal from './Portal'

function PortalWrapper({children, isOpen}) {
	return (
		<>
			{	
				isOpen &&	
				<Portal>
						<div className='modal-window'>
							<div className="modal-window__wrapper">
								{children}
							</div>
						</div>
				</Portal>
			}
		</>
	)
}

export default PortalWrapper
