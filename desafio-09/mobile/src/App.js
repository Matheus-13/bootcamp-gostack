import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';

export default function App() {
	const signed = useSelector(store => store.auth.signed);

	return(
		<Routes isSigned={signed} />
	);
}