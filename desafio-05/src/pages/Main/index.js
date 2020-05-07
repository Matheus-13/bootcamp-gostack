import React from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Form, List, SubmitButton } from './style.js';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

class Main extends React.Component {
	state = {
		newRepo: '',
		repositories: [],
		loading: false,
		error: false
	};

	componentDidMount() {
		const repositories = localStorage.getItem('repositories');
		if (repositories) {
			this.setState({ repositories: JSON.parse(repositories) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.repositories !== this.state.repositories) {
			localStorage.setItem('repositories', JSON.stringify(this.state.repositories));
		}
	}

	handleInputChange = (e) => {
		this.setState({
			newRepo: e.target.value
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({
			loading: true,
			error: false
		});

		const { newRepo, repositories } = this.state;

		try {
			const response = await api.get(`/repos/${newRepo}`);
			const data = {
				name: response.data.full_name
			};

			repositories.map(repository => {
				if (repository.name == data.name) throw new Error('Duplicate repository');
			});

			this.setState({
				repositories: [...repositories, data],
				newRepo: '',
				error: false,
				loading: false
			});

		} catch(e) {
			this.setState({
				error: true,
				loading: false
			});
		}
	}

	render() {
		const { error, loading, newRepo, repositories } = this.state;

	  return (
	  	<>
	    <Container>

	   		<h1><FaGithubAlt/> Repositórios</h1>

	   		<Form onSubmit={this.handleSubmit}>
	   			<input type='text' placeholder='Adicionar repositório' error={String(error)} value={newRepo} onChange={this.handleInputChange} />
	   			<SubmitButton loading={loading} >
	   				{ loading ? <FaSpinner/> : <FaPlus/> }
	   			</SubmitButton>
	   		</Form>

	   		<List>
	   			{repositories.map((repository) => (
	   				<li key={repository.name} >
	   					<span>{repository.name}</span>
	   					<Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
	   				</li>
	   			))}
	   		</List>

	    </Container>

	    <Footer/>
	    </>
	  );
	}
}

export default Main;