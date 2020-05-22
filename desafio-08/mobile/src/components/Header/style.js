import styled from 'styled-components/native';

export const Amount = styled.Text`
	position: absolute;
	top: -11px;
	right: -9px;
	background-color: #7159c1;
	color: #fff;
	font-size: 12px;
	padding: 4px;
	border-radius: 50%;
`;

export const Container = styled.View`
	width: 100%;
	height: 64px;
	padding: 0 20px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.Image`
	width: 153px;
	height: 20px;
`;