export function addToCart(product) {
	return {
		type: 'ADD_TO_CART',
		product
	}
}

export function deleteFromCart(id) {
	return {
		type: 'DELETE_FROM_CART',
		id: id
	}
}

export function decrementProduct(id) {
	return {
		type: 'DECREMENT_PRODUCT',
		id: id
	}
}

export function incrementProduct(id) {
	return {
		type: 'INCREMENT_PRODUCT',
		id: id
	}
}