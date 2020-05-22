import React from 'react';
import { FaReact, FaHeart } from 'react-icons/fa';
import { Container } from './style';

export default function Footer() {
	return(
		<Container>
			Made with <FaReact size={14} color='#6978ff' /> and <FaHeart size={14} color='#ff6978' /> by Matheus Ramalho de Oliveira
		</Container>
	);
}