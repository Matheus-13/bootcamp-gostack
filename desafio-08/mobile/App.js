import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/Cart/store';
import Routes from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
    	<Routes/>
    </Provider>
  );
}