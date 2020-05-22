import React from 'react';
import { useSelector } from 'react-redux';
import * as RootNavigation from '../../services/RootNavigation.js';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo_img from '../../assets/images/logo.svg';
import { Amount, Container, Logo } from './style';

export default function Header() {
	const quantity = useSelector(store => store.quantity);

	return(
		<Container>
			<TouchableOpacity onPress={() => { RootNavigation.navigate('Home') }}>
				<Text>
					<Logo source={logo_img} />
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => { RootNavigation.navigate('Cart') }}>
				<Text>
					<Icon name="basket" size={28} color="#fff" />
				</Text>
				{ quantity > 0 ?
					<Amount>
						{quantity}
					</Amount>
				:
					<></>
				}
			</TouchableOpacity>
		</Container>
	);
}