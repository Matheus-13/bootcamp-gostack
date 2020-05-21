import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cart = styled(Link)`
	display: flex;
	align-items: center;
	transition: 0.2s;

	&:hover {
		opacity: 0.7;
	}

	div {
		text-align: right;
		margin-right: 10px;

		strong {
			display: block;
			color: #fff;
		}

		span {
			font-size: 14px;
			color: #999;
		}
	}
`;

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 50px 0;
`;