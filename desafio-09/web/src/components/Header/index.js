import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '~/components/Notifications';
import { logo } from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './style';

export default function Header() {
	const profile = useSelector(store => store.user.profile);

	return(
		<Container>
		  <Content>
		    <nav>
		    	<img src={logo} alt='GoBarber' />
		    	<Link to='/dashboard'>DASHBOARD</Link>
		    </nav>

		    <aside>
		    	<Notifications />
		    	<Profile>
		    		<div>
		    			<strong>{profile.name}</strong>
		    			<Link to='/profile'>Meu perfil</Link>
		    		</div>
		    		<img src={profile.avatar.url || 'https://i.pinimg.com/564x/79/94/62/7994620cedf2ba9cb83ea0209ae989ee.jpg'} alt={profile.name} />
		    	</Profile>
		    </aside>
		  </Content>				
		</Container>
	);
}