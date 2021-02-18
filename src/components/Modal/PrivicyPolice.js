import React from 'react'
// styles
import './PrivicyPolice.sass'
// modal wrapper
import PortalWrapper from "../../components/Portal/PortalWrapper"

function PrivicyPolice({onClose, isOpen}) {
	return (
		<PortalWrapper isOpen={isOpen}>
			<h1 className="modal-window__title">Title</h1>
			<p className="modal-window__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem quibusdam eos numquam facere est odio nostrum architecto voluptates consequatur, laboriosam dolorum, vero beatae cumque similique asperiores, porro quisquam suscipit.</p>
			<p className="modal-window__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem quibusdam eos numquam facere est odio nostrum architecto voluptates consequatur, laboriosam dolorum, vero beatae cumque similique asperiores, porro quisquam suscipit.</p>
			<p className="modal-window__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem quibusdam eos numquam facere est odio nostrum architecto voluptates consequatur, laboriosam dolorum, vero beatae cumque similique asperiores, porro quisquam suscipit.</p>
			<p className="modal-window__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem quibusdam eos numquam facere est odio nostrum architecto voluptates consequatur, laboriosam dolorum, vero beatae cumque similique asperiores, porro quisquam suscipit.</p>
			<button onClick={onClose} className="modal-window__close-button"></button>
		</PortalWrapper>
	)
}

export default PrivicyPolice
