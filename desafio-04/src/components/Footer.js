import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {
	render() {
		return(
			<div className="footer">
				<span>Made with <FontAwesomeIcon icon={faReact} /> and <FontAwesomeIcon icon={ faHeart } /> by Matheus Ramalho de Oliveira</span>
			</div>
		);
	}
}

export default Footer;