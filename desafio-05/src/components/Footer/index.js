import React from 'react';
import { FaReact, FaHeart } from 'react-icons/fa';
import './index.css';

class Footer extends React.Component {
	render() {
		return(
			<section id="footer">
				Made with <FaReact/> and <FaHeart/> by Matheus Ramalho de Oliveira
			</section>
		);
	}
}

export default Footer;