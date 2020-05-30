import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';
import AvatarInput from './AvatarInput';
import { Container } from './style';

export default function Profile() {
	const dispatch = useDispatch();
	const profile = useSelector(store => store.user.profile);

	function handleSubmit(data) {
		dispatch(updateProfileRequest(data));
	}

	function handleSignOut() {
		dispatch(signOut());
	}

  return(
    <Container>
    	<Form initialData={profile} onSubmit={handleSubmit}>
    		<AvatarInput name='avatar_id' />
    		<Input type='text' name='name' placeholder='Nome completo' />
    		<Input type='email' name='email' placeholder='Seu endereço de e-mail' />
    		<hr />
    		<Input type='password' name='oldPassword' placeholder='Sua senha atual' />
    		<Input type='password' name='password' placeholder='Nova senha' />
    		<Input type='password' name='confirmPassword' placeholder='Confirmação da senha nova' />
    		<button type='submit'>Atualizar perfil</button>
    	</Form>

    	<button type='button' onClick={handleSignOut}>Sair do GoBarber</button>
    </Container>
  );
}