import React, { useReducer } from "react";

const CartContext = React.createContext({
  value: [],
  isActive: false,
  onClose: () => {},
  onOpen: () => {},
});



const cartReducer = (lastCart, action) => {
  if (action.type === 'ADD') {
    const newCartItem = action.item;
    const newTotalAmount = lastCart.totalAmount + (newCartItem.price * newCartItem.amount);

    const itemId = lastCart.list.findIndex(cartItem => cartItem.id === newCartItem.id);
    const existingCartItem = lastCart.list[itemId];

    let updatedList;
    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + newCartItem.amount
      }
      updatedList = [...lastCart.list];
      updatedList[itemId] = updatedItem
    } else {
      updatedList = [newCartItem, ...lastCart.list];
    }

    return {
      totalAmount: newTotalAmount,
      list: updatedList,
      status: lastCart.status
    };
  }
  if (action.type === 'REMOVE') {
    const itemId = lastCart.list.findIndex(cartItem => cartItem.id === action.id);
    const cartItem = lastCart.list[itemId];

    const newTotalAmount = lastCart.totalAmount - cartItem.price;

    let updatedList;

    if(cartItem.amount !== 1) {
      const updatedItem = {...cartItem, amount: cartItem.amount - 1};
      updatedList = [...lastCart.list];
      updatedList[itemId] = updatedItem;
    } else {
      updatedList = lastCart.list.filter(item => item.id !== action.id)
    }

    return {
      totalAmount: newTotalAmount,
      list: updatedList,
      status: lastCart.status
    };
  }
  if (action.type === 'OPEN') {
    return {...lastCart, status: true}
  } 
  if (action.type === 'CLOSE') {
    return {...lastCart, status: false}
  } 
  if (action.type === 'ORDER') {
    console.log('The food is being ordered');
  }

  return {
    totalAmount: 0,
    list: [],
    status: false
  }
}

export const CartProvider = (props) => {

  const [cart, cartDispatch] = useReducer(cartReducer, {
    totalAmount: 0,
    list: [],
    status: false
  })

  const addToCartHandler = (newCartElement) => cartDispatch({
    type: 'ADD',
    item: newCartElement
  });

  const removeCartHandler = (id) => cartDispatch({
    type: 'REMOVE',
    id: id
  });

  const openCartHandler = () => cartDispatch({
    type: 'OPEN'
  });

  const closeCartHandler = () => cartDispatch({
    type: 'CLOSE'
  });

  const buyOrderHandler = () => cartDispatch({
    type: 'ORDER'
  });

  return (
    <CartContext.Provider
      value={{
        value: cart.list,
        isActive: cart.status,
        totalAmount: cart.totalAmount,
        onAddToCart: addToCartHandler,
        onRemove: removeCartHandler,
        onOpen: openCartHandler,
        onClose: closeCartHandler,
        onOrder: buyOrderHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
