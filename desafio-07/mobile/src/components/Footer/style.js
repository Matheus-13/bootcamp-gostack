import styled from 'styled-components/native';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
	width: 92%;
	margin: 0 auto 10px;
	padding: 10px 0;
	align-items: center;
	background-color: #fff;
	border-radius: 4px;
`;

export const FooterText = styled.Text`
	display: flex;
	font-size: 12px;
	color: #17161b;
	align-items: center;
`;

export const Icon = styled(Ico)`
	font-size: 14px;
`;