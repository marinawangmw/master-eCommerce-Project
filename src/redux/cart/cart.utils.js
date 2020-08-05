export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(
            cartItem => cartItem.id === cartItemToAdd.id)

    if(existingItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

 export const subtracItemFromCart = (cartItems, cartItemToSubtract) => {
    const existingItem = cartItems.find(
            cartItem => cartItem.id === cartItemToSubtract.id)

    // si tiene 1 solo, lo remuevo del cart
    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToSubtract.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToSubtract.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}