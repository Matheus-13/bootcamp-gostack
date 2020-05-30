import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '~/services/api';
import Background from '~/components/Background';
import { Container, ProvidersList, Provider, Avatar, Name } from './style';

export default function SelectProvider({ navigation }) {
	navigation.setOptions({
  	title: 'Selecione o prestador',
  	headerLeft: () => (
  		<TouchableOpacity onPress={ () => navigation.navigate('Dashboard') }>
  			<Icon name='chevron-left' size={20} color='#fff' />
  		</TouchableOpacity>
  	)
  });

  const [providers, setProviders] = useState([]);

  useEffect(() => {
  	async function loadProviders() {
  		const response = await api.get('providers');
  		setProviders(response.data);
  	}

  	loadProviders();
  }, []);

	return(
		<Background>
			<Container>
				<ProvidersList
					data={providers}
					keyExtractor={provider => String(provider.id)}
					renderItem={({ item }) => (
						<Provider onPress={ () => navigation.navigate('SelectDateTime', { item }) }>
							<Avatar source={{
								uri: item.avatar ?
								item.avatar.url :
								`https://api.adorable.io/avatar/50/${item.name}.png`
							}} />
							<Name>{item.name}</Name>
						</Provider>
					)}
				/>
			</Container>
		</Background>
	);
}