import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './services/RootNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{
	        headerStyle: {
	          backgroundColor: '#17161b',
	          borderBottomWidth: 0,
	        },
	        headerTintColor: '#fff',
	        headerTitle: <Header/>,
      	}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}