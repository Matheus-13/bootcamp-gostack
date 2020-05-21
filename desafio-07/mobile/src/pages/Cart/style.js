import styled from 'styled-components/native';
import Ico from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
	width: 92%;
	background-color: #fff;
	padding: 20px;
	border-radius: 4px;
	margin: 0 auto 20px;
`;

export const Amount = styled.Text`
	color: #17161b;
	font-size: 16px;
	margin: 0 8px;
`;

export const Button = styled.TouchableOpacity`
	width: 100%;
	background-color: #7159c1;
	border-radius: 4px;
	padding: 20px;
	align-items: center;
`;

export const ButtonText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #fff;
`;

export const Empty = styled.View`
	align-items: center;
`;

export const EmptyText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #17161b;
	margin-top: 5px;
`;

export const Icon = styled(Ico)`
	font-size: 25px;
	color: #7159c1;
`;

export const Icon2 = styled(Ico)`
	font-size: 40px;
	color: #8f8f8f;
`;

export const Item = styled.View`
	margin-bottom: 20px;
`;

export const ItemAmount = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ItemBody = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: #ececec;
	padding: 10px;
	border-radius: 4px;
`;

export const ItemHeader = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const ItemPrice = styled.Text`
	color: #17161b;
	font-size: 16px;
	font-weight: bold;
`;

export const Image = styled.Image`
	width: 100px;
	height: 100px;
`;

export const Title = styled.View`
	flex: 1;
	padding: 0 10px;
`;

export const TitleText = styled.Text`
	font-size: 16px;
	color: #17161b;
`;

export const TitlePrice = styled.Text`
	font-size: 16px;
	color: #17161b;
	font-weight: bold;
`;

export const Total = styled.View`
	align-items: center;
`;

export const TotalText = styled.Text`
	font-size: 14px;
	color: #8f8f8f;
	font-weight: bold;
`;

export const TotalPrice = styled.Text`
	font-size: 20px;
	color: #17161b;
	font-weight: bold;
	margin: 5px 0 10px;
`;