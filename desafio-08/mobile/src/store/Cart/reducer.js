export default (state = { cart:[], quantity:0 }, action) => {
  switch (action.type) {
	  case 'ADD_TO_CART': {
	  	let { cart, quantity } = state;
	  	let { product } = action;
	  	quantity++;

  		for (var i = 0; i < cart.length; i++) {
	  		if (cart[i].id == product.id) {
	  			cart[i].amount++;
	  			return { cart, quantity };
	  		}
	  	}

	  	product.amount = 1;
	  	return { cart:[...cart, product], quantity };
	  }

	  case 'DELETE_FROM_CART': {
	  	let { cart, quantity } = state;
	  	let { id } = action;

	  	for (var i = 0; i < cart.length; i++) {
	  		if (cart[i].id == id) {
	  			quantity -= cart[i].amount;
	  			cart.splice(i, 1);
	  			return { cart, quantity };
	  		}
	  	}
	  }

	  case 'DECREMENT_PRODUCT': {
	  	let { cart, quantity } = state;
	  	let { id } = action;
			quantity--;

			for (var i = 0; i < cart.length; i++) {
	  		if (cart[i].id == id) {
	  			cart[i].amount--;
	  			return { cart, quantity };
	  		}
	  	}
	  }

  	case 'INCREMENT_PRODUCT': {
  		let { cart, quantity } = state;
	  	let { id } = action;
			quantity++;

			for (var i = 0; i < cart.length; i++) {
	  		if (cart[i].id == id) {
	  			cart[i].amount++;
	  			return { cart, quantity };
	  		}
	  	}
  	}

	  default: return state;
  }
}