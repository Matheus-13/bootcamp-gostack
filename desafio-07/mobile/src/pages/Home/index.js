import React from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import * as cartActions from '../../store/Cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import Footer from '../../components/Footer';
import { Background } from '../../styles/global';
import { Amount, Button, ButtonBox, ButtonText, Center, Container, Icon, Item,
	Image, Price, Title } from './style';

class Home extends React.Component {
	state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  };

  addToCart = async (product) => {
  	const { cart } = this.props;
  	const response = await api.get(`/stock/${product.id}`);
  	for (var i = 0; i < cart.length; i++) {
  		if (cart[i].id == response.data.id &&
  				cart[i].amount == response.data.amount) {
  			Alert.alert('Quantidade solicitada fora de estoque.');
  			return;
  		}
  	}
  	this.props.dispatch(cartActions.addToCart(product));
  }

	render() {
		const { products } = this.state;
		const { amount } = this.props;

		return(
			<Background>
				<FlatList
					data={products}
					extraData={amount}
					keyExtractor={product => String(product.id)}
					renderItem={({item}) => (
						<Item>
							<Center>
								<Image source={item.image} />
							</Center>
							<Title>
								{item.title}
							</Title>
							<Price>
								{item.priceFormatted}
							</Price>
							<Button onPress={() => { this.addToCart(item) }}>
								<ButtonBox>
									<Text>
										<Icon name="cart-plus" />
									</Text>
									<Amount>
										{amount[item.id] ? amount[item.id] : 0}
									</Amount>
								</ButtonBox>
								<ButtonText>
									ADICIONAR
								</ButtonText>
							</Button>
						</Item>
					)}
				/>
				<Footer/>
			</Background>
		);
	}
}

const mapStoreToProps = store => ({
	cart: store.cart,
  amount: store.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

export default connect(mapStoreToProps)(Home);