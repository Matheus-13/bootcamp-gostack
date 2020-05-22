import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		height: 100vh;
	}

	body {
		background: #191920 url(${background}) no-repeat center top;
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font: 16px Roboto, sans-serif;
	}

	#root {
		max-width: 1020px;
		margin: 0 auto;
		padding: 50px 20px 0;

		.container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: calc(100% - 90px);
		}
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`;