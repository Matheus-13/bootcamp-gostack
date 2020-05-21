import styled from 'styled-components/native';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';

export const Amount = styled.Text`
	color: #fff;
	font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
	flex-direction: row;
	background-color: #7159c1;
	border-radius: 4px;
`;

export const ButtonBox = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 12px;
	background-color: rgba(0,0,0,0.1);
`;

export const ButtonText = styled.Text`
	flex: 1;
	color: #fff;
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	padding: 12px 0;
`;

export const Center = styled.Text`
	display: flex;
	justify-content: center;
`;

export const Icon = styled(Ico)`
	font-size: 18px;
	color: #fff;
`;

export const Item = styled.View`
	width: 92%;
	background-color: #fff;
	padding: 20px;
	border-radius: 4px;
	margin: 0 auto 20px;
`;

export const Image = styled.Image`
	width: 200px;
	height: 200px;
`;

export const Price = styled.Text`
	font-size: 20px;
	color: #17161b;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const Title = styled.Text`
	font-size: 16px;
	color: #17161b;
	margin: 10px 0 5px;
`;