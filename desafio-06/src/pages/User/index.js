import React from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Container, Header, Avatar, Name, Bio, Stars,
	Starred, OwnerAvatar, Info, Title, Author, Center, Loading
} from './style';

export default class User extends React.Component {
	PropTypes = {
		navigation: PropTypes.shape().isRequired,
	}

	state = {
		stars: [],
		loading: true,
		page: 1,
	}

	async componentDidMount() {
		this.props.navigation.setOptions({
			title: this.props.route.params.user.name,
		});
		await this.getStars();
		this.setState({
			loading: false,
		});
	}

	getStars = async () => {
		const { user } = this.props.route.params;
		let { stars, page } = this.state;
		const response = await api.get(`/users/${user.login}/starred?page=${page}`);
		page++;
		this.setState({
			stars: [...stars, ...response.data],
			page: page,
		});
	}

	handleNavigate = (repository) => {
		this.props.navigation.navigate('Repository', { repository });
	}

	render() {
		const { stars, loading } = this.state;
		const { user } = this.props.route.params;

	  return (
	    <Container>
	    	<Header>
	    		<Avatar source={{ uri:user.avatar }} />
	    		<Name>{user.name}</Name>
	    		<Bio>{user.bio}</Bio>
	    	</Header>

	    	{loading ? (
	    		<Center>
	    			<Loading>LOADING...</Loading>
	    		</Center>
	    	) : (
	    		<Stars
		    		data={stars}
		    		keyExtractor={star => String(star.id)}
		    		onEndReachedThreshold={0.2}
		    		onEndReached={this.getStars}
		    		renderItem={({ item }) => (
		    			<Starred onPress={() => this.handleNavigate({name:item.name, url:item.html_url})}>
		    				<OwnerAvatar source={{ uri:item.owner.avatar_url }} />
		    				<Info>
		    					<Title>{item.name}</Title>
		    					<Author>{item.owner.login}</Author>
		    				</Info>
		    			</Starred>
		    		)}
		    	/>
	    	)}
	    </Container>
	  );
	}
};