import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import { Container } from './style';

export default function AvatarInput() {
	const { defaultValue, registerField } = useField('avatar');
	const [file, setFile] = useState(defaultValue && defaultValue.id);
	const [preview, setPreview] = useState(defaultValue && defaultValue.url);
	const ref = useRef();

	useEffect(() => {
		if (ref.current) {
			registerField({
				name: 'avatar_id',
				ref: ref.current,
				path: 'dataset.file'
			});
		}
	}, [ref, registerField]);

	async function handleChange(e) {
		const data = new FormData();
		data.append('file', e.target.files[0]);
		const response = await api.post('files', data);
		const { id, url } = response.data;
		setFile(id);
		setPreview(url);
	}

  return(
    <Container>
    	<label htmlFor='avatar'>
    		<img src={preview || 'https://lh3.googleusercontent.com/proxy/tMZqBEkeXS6ZQk9FyRJvkyHpt5DGJx9gVpJZV5h5RlHBh19uw-ZGPFpHIvbvvlgqI5kC4rHULQYScu6jM3aUr9gEiVAqPcE09xmM3Hayf-e7EnUcJ_eZkOS2Yn9MyqLlZ-4RdBGEReu1swRGkiOQ'} alt='' />
    		<input id='avatar' type='file' accept='image/*'
    			data-file={file} onChange={handleChange}
    			ref={ref} />
    	</label>
    </Container>
  );
}