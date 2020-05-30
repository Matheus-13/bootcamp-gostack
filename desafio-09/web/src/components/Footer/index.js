import React from 'react';
import { FaReact, FaHeart } from 'react-icons/fa';
import { Container } from './style';

export default function Footer() {
	return(
		<Container>
			Made with <FaReact size={14} color='#DBEDFF' /> and <FaHeart size={14} color='#EF9FA7' /> by Matheus Ramalho de Oliveira
		</Container>
	);
}