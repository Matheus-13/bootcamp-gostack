import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '~/services/api';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import { Container, HourList, Hour, Title } from './style';

export default function SelectDateTime({ navigation }) {
	navigation.setOptions({
  	title: 'Selecione o horário',
  	headerLeft: () => (
  		<TouchableOpacity onPress={ () => navigation.goBack() }>
  			<Icon name='chevron-left' size={20} color='#fff' />
  		</TouchableOpacity>
  	)
  });

  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);
  const provider = navigation.getParam('item');

  useEffect(() => {
  	async function loadAvailable() {
  		const response = await api.get(`providers/${provider.id}/available`, {
        params: { date:date.getTime() }
      });

  		setHours(response.data);
  	}

  	loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
  	navigation.navigate('Confirm', {
  		provider, time
  	});
  }

	return(
		<Background>
			<Container>
				<DateInput date={date} onChange={setDate} />

				<HourList
					data={hours}
					keyExtractor={item => item.time}
					renderItem={({ item }) => (
						<Hour onPress={ () => handleSelectHour(item.value) } enabled={item.available}>
							<Title>{item.time}</Title>
						</Hour>
					)}
				/>
			</Container>
		</Background>
	);
}