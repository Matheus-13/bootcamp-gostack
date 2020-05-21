import React from 'react';
import { connect } from 'react-redux';
import * as RootNavigation from '../../services/RootNavigation.js';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import logo_img from '../../assets/images/logo.svg';
import { Amount, Container, Logo } from './style';

class Header extends React.Component {
	render() {
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
					{ this.props.quantity > 0
						? <Amount>
								{this.props.quantity}
							</Amount>
						:
							<></>
					}
	   		</TouchableOpacity>
			</Container>
		);
	}
}

export default connect(store => ({ quantity:store.quantity }))(Header);