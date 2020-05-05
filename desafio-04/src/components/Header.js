import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<div className="logo">facebook</div>
				<div className="profile">
					<span>Meu perfil</span>
					<FontAwesomeIcon icon={faUserCircle} />
				</div>
			</div>
		);
	}
}

export default Header;