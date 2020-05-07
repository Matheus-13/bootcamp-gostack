import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { FaArrowLeft, FaArrowRight, FaHandPointLeft } from 'react-icons/fa';
import { Button, IssueList, Loading, Owner } from './style';
import Container from '../../components/Container';
import Footer from '../../components/Footer';

class Repository extends React.Component {
	PropTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				repository: PropTypes.string
			})
		}).isRequired
	};

	state = {
		repository: {},
		issues: [],
		status: 'open',
		per_page: 10,
		page: 1,
		loading: true
	};

	async componentDidMount() {
		const repoName = decodeURIComponent(this.props.match.params.repository);
		const { status, per_page } = this.state;
		const [repository, issues] = await Promise.all([
			api.get(`/repos/${repoName}`),
			api.get(`/repos/${repoName}/issues`, {
				params: {
					state: status,
					per_page: per_page
				}
			})
		]);
		this.setState({
			repository: repository.data,
			issues: issues.data,
			loading: false
		});
	}

	getIssues = async () => {
		const { status, per_page, page } = this.state;
		const issues = await api.get(`/repos/${decodeURIComponent(this.state.repository.full_name)}/issues`, {
			params: {
				state: status,
				per_page: per_page,
				page: page
			}
		});

		this.setState({
			issues: issues.data
		});
	}

	changeStatus = (status) => {
		this.setState({
			status: status,
			page: 1
		});
		this.getIssues();
	}

	nextPage = () => {
		let { page } = this.state;
		page++;
		this.setState({
			page: page
		});
		this.getIssues();
	}

	previousPage = () => {
		let { page } = this.state;
		if (page > 1) {
			page--;
			this.setState({
				page: page
			});
			this.getIssues();
		}
	}

  render() {
  	const { repository, issues, page, loading } = this.state;

  	if (loading) {
  		return <Loading>Carregando</Loading>
  	}

	  return (
	  	<>
	    <Container>
	    	<Owner>
	    		<Link to="/"><FaHandPointLeft/> Voltar</Link>
	    		<img src={repository.owner.avatar_url} alt={repository.owner.login} />
	    		<h1>{repository.name}</h1>
	    		<p>{repository.description}</p>
	    	</Owner>

	    	<IssueList>
	    		<div className='buttons'>
	    			<Button onClick={() => this.changeStatus('all') }>Todas</Button>
	    			<Button onClick={() => this.changeStatus('open') }>Abertas</Button>
	    			<Button onClick={() => this.changeStatus('closed') }>Fechadas</Button>
	    		</div>

	    		{issues.map(issue => (
	    			<li key={String(issue.id)} >
	    				<img src={issue.user.avatar_url} alt={issue.user.login} />
	    				<div>
	    					<strong>
	    						<a target="_blank" href={issue.html_url}>{issue.title}</a>
	    						{issue.labels.map(label => (
	    							<span key={String(label.id)}>{label.name}</span>
	    						))}
	    					</strong>
	    					<p>{issue.user.login}</p>
	    				</div>
	    			</li>
	    		))}

	    		<div className='pagination'>
	    			<FaArrowLeft onClick={ this.previousPage } title='Página anterior' disable={String(page == 1)} />
	    			<span>Página {page}</span>
	    			<FaArrowRight onClick={ this.nextPage } title='Próxima página' />
	    		</div>
	    	</IssueList>
	    </Container>

	    <Footer/>
	    </>
	  );
	 }
}

export default Repository;