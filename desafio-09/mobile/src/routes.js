import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function New() {
  return (
    <Stack.Navigator screenOptions={{
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        marginLeft: 20
      }
    }}>
      <Stack.Screen name='SelectProvider' component={SelectProvider} />
      <Stack.Screen name='SelectDateTime' component={SelectDateTime} />
      <Stack.Screen name='Confirm' component={Confirm} />
    </Stack.Navigator>
  );
}

export default function Routes({ isSigned }) {
  return (
    <NavigationContainer>
    	{ isSigned ? (

    		<Tab.Navigator resetOnBlur={true} tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#fff',
          inactiveTintColor: rgba(255,255,255, 0.6),
          style: {
            backgroundColor: '#8d41a8'
          },
        }}>
        	<Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="New" component={New}
            options={{
              tabBarVisible: false,
              tabBarLabel: 'Agendar',
              tabBarIcon: <Icon name='add-circle-outline' size={20} color='rgba(255,255,255,0.6)' />
          }} />
          <Tab.Screen name="Profile" component={Profile} />
      	</Tab.Navigator>

    	) : (

    		<Stack.Navigator>
        	<Stack.Screen name="SignIn" component={SignIn} />
        	<Stack.Screen name="SignUp" component={SignUp} />
      	</Stack.Navigator>

    	) }
    </NavigationContainer>
  );
}