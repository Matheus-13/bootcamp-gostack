import styled from 'styled-components';

export const Button = styled.button`
	background-color: #333;
	color: #eee;
  border-radius: 2px;
  font-weight: 600;
  padding: 5px 15px;
  border: 0;

  &:hover {
  	background-color: #7159c1;
  }

  & + button {
  	margin-left: 15px;
  }
`;

export const IssueList = styled.ul`
	padding-top: 30px;
	margin-top: 30px;
	border-top: 1px solid #eee;
	list-style: none;

	& .buttons {
		display: flex;
		justify-content: center;
		margin-bottom: 10px;
	}

	& .pagination {
		display: flex;
		justify-content: space-between;
		margin: 20px 0 0;
		
		svg {
			background-color: #333;
			color: #eee;
			border-radius: 2px;
			width: 46px;
			height: 26px;
			padding: 5px 15px;
			cursor: pointer;

			&[disable=true] {
				cursor: not-allowed;
				opacity: 0.6;
			}
		}
	}

	li {
		display: flex;
		padding: 15px 10px;
		border: 1px solid #eee;
		border-radius: 4px;

		& + li {
			margin-top: 10px;
		}

		img {
			width: 38px;
			height: 38px;
			border-radius: 50%;
			border: 2px solid #eee;
		}

		div {
			flex: 1;
			margin-left: 15px;

			a {
				text-decoration: none;
				color: #333;

				&:hover {
					color: #7159c1;
				}
			}

			span {
				background-color: #eee;
				color: #333;
				border-radius: 2px;
				font-size: 12px;
				font-weight: 600;
				height: 20px;
				padding: 3px 4px;
				margin-left: 10px;
			}

			p {
				margin-top: 5px;
				font-size: 14px;
				color: #999;
			}
		}
	}
`;

export const Loading = styled.div`
	color: #fff;
	font-size: 32px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const Owner = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	svg {
		font-size: 20px;
		margin-right: 5px;
	}

	img {
		width: 120px;
		border-radius: 50%;
		margin-top: 20px;
	}

	h1 {
		font-size: 24px;
		margin-top: 10px;
	}

	p {
		margin-top: 5px;
		color: #667;
		line-height: 1.4;
		text-align: center;
		max-width: 480px;
	}
`;