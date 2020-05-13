import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';
import { Container, Form, Input, List, SubmitButton,
	User, Avatar, Name, Bio, ProfileButton,
	ProfileButtonText, Footer, FooterText } from './style';

export default class Main extends React.Component {
	PropTypes = {
		navigation: PropTypes.shape({
			navigate: PropTypes.func,
		}).isRequired,
	}

	state = {
		newUser: '',
		users: [],
		loading: false,
	}

	async componentDidMount() {
		this.props.navigation.setOptions({
			title: 'Usuários',
		});

		const users = await AsyncStorage.getItem('users');
		if (users) {
			this.setState({ users:JSON.parse(users) });
		}
	}

	componentDidUpdate(_, prevState) {
		const { users } = this.state;
		if (prevState.users !== users) {
			AsyncStorage.setItem('users', JSON.stringify(users));
		}
	}

	handleAddUser = async () => {
		this.setState({ loading: true });
		const { newUser, users } = this.state;
		const response = await api.get(`/users/${newUser}`);
		const data = {
			name: response.data.name,
			login: response.data.login,
			bio: response.data.bio,
			avatar: response.data.avatar_url,
		};
		this.setState({
			users: [...users, data],
			newUser: '',
			loading: false,
		});
		Keyboard.dismiss();
	}

	handleNavigate = (user) => {
		const { navigation } = this.props;
		navigation.navigate('User', { user });
	}

	render() {
		const { loading, newUser, users } = this.state;

	  return (
	    <Container>
	    	<Form>
	    		<Input
	    			autoCorrect={false}
	    			autoCapitalize="none"
	    			placeholder='Adicionar usuário'
	    			value={newUser}
	    			onChangeText={text => this.setState({ newUser:text })}
	    			returnKeyType='send'
	    			onSubmitEditing={this.handleAddUser}
	    		/>
	    		<SubmitButton loading={loading} onPress={this.handleAddUser}>
	    			{ loading ?
	    				<ActivityIndicator color='#fff' />
	    				:
	    				<Icon name='plus' size={20} color='#fff' />
	    			}
	    		</SubmitButton>
	    	</Form>

	    	<List
	    		data={users}
	    		keyExtractor={user => user.login}
	    		renderItem={({ item }) => (
	    			<User>
	    				<Avatar source={{ uri:item.avatar }} />
	    				<Name>{item.name}</Name>
	    				<Bio>{item.bio}</Bio>
	    				<ProfileButton onPress={() => this.handleNavigate(item)} >
	    					<ProfileButtonText>Ver perfil</ProfileButtonText>
	    				</ProfileButton>
	    			</User>
	    		)}
	    	/>

	    	<Footer>
	    		<FooterText>Made with <Icon name='react' size={14} color='#0dbfdb' /> and <Icon name='cards-heart' size={14} color='#de3c4b' /> by Matheus Ramalho de Oliveira</FooterText>
	    	</Footer>
	    </Container>
	  );
	}
};