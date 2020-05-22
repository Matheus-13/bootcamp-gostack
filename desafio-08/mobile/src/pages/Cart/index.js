import React from 'react';
import { Alert, FlatList, Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../store/Cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import Footer from '../../components/Footer';
import { Background } from '../../styles/global';
import { Amount, Button, ButtonText, Container, Empty, EmptyText, Icon, Icon2,
	Item, ItemAmount, ItemBody, ItemHeader, ItemPrice, Image, Title, TitleText,
	Total, TotalPrice, TotalText, TitlePrice } from './style';

export default function Cart() {
  const products = useSelector(store => store.cart.map(product => ({
	...product,
	subtotal: formatPrice(product.price * product.amount)
  })));
  const total = useSelector(store => formatPrice(store.cart.reduce((total, product) =>
	total + product.price * product.amount, 0)
  ));
  const dispatch = useDispatch();

  function deleteProduct(id) {
  	dispatch(cartActions.deleteFromCart(id));
  }

  function decrementProduct(product) {
  	if (product.amount == 1)
  		deleteProduct(product.id);
  	else
  		dispatch(cartActions.decrementProduct(product.id));
  }

  async function incrementProduct(id) {
  	const response = await api.get(`/stock/${id}`);
  	for (var i = 0; i < products.length; i++) {
  		if (products[i].id == response.data.id &&
  				products[i].amount == response.data.amount) {
  			Alert.alert('Quantidade solicitada fora de estoque.');
  			return;
  		}
  	}
  	dispatch(cartActions.incrementProduct(id));
  }

	return(
		<Background>
			<Container>
				{ products.length ? <>
					<FlatList
						data={products}
						keyExtractor={product => String(product.id)}
						renderItem={({item}) => (
							<Item>
								<ItemHeader>
									<Text>
										<Image source={item.image} />
									</Text>
									<Title>
										<TitleText>
											{item.title}
										</TitleText>
										<TitlePrice>
											{item.priceFormatted}
										</TitlePrice>
									</Title>
									<TouchableHighlight onPress={() => deleteProduct(item.id)}>
										<Text>
											<Icon name="delete-forever" />
										</Text>
									</TouchableHighlight>
								</ItemHeader>
								<ItemBody>
									<ItemAmount>
										<TouchableHighlight onPress={() => decrementProduct(item)}>
											<Text>
												<Icon name="minus-circle-outline" />
											</Text>
										</TouchableHighlight>
										<Amount>
											{item.amount}
										</Amount>
										<TouchableHighlight onPress={() => incrementProduct(item.id)}>
											<Text>
												<Icon name="plus-circle-outline" />
											</Text>
										</TouchableHighlight>
									</ItemAmount>
									<ItemPrice>
										{item.subtotal}
									</ItemPrice>
								</ItemBody>
							</Item>
						)}
					/>
					<Total>
						<TotalText>
							TOTAL
						</TotalText>
						<TotalPrice>
							{total}
						</TotalPrice>
					</Total>
					<Button>
						<ButtonText>
							FINALIZAR PEDIDO
						</ButtonText>
					</Button>
				</> : <>
					<Empty>
						<Text>
							<Icon2 name="cart-off" />
						</Text>
						<EmptyText>
							Seu carrinho está vazio
						</EmptyText>
					</Empty>
				</> }
			</Container>
			<Footer/>
		</Background>
	);
}