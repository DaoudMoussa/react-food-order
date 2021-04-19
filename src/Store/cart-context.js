import React, { useState } from "react";

const CartContext = React.createContext({
  value: [],
  isActive: false,
  onClose: () => {},
  onOpen: () => {},
});

export const CartProvider = (props) => {
  const [cartList, setCartList] = useState([
    {
      id: "m4",
      name: "Green Bowl",
      price: 18.99,
      amount: 2,
    },
  ]);
  const [cartIsActive, setCartIsActive] = useState(false);

  const addToCartHandler = (newCartElement) => {

    const elementIndex = cartList.findIndex(
      (cartElement) => cartElement.id === newCartElement.id
    );

    if (elementIndex === -1) setCartList(prevCartList => [ newCartElement, ...prevCartList ]);
    else {

      setCartList(prevCartList => {
        const newCartList = [...prevCartList]

        console.log(newCartList[elementIndex].amount + ' + ' + newCartElement.amount);

        let updatedCartElement = {...newCartElement,
                  amount: prevCartList[elementIndex].amount + newCartElement.amount }


        newCartList[elementIndex] = updatedCartElement;

        // newCartList[elementIndex].amount += newCartElement.amount;
        
        console.log(newCartList[elementIndex].amount)


        return newCartList;
      })
    }
  };
  const openCartHandler = () => {
    setCartIsActive(true);
  };

  const closeCartHandler = () => {
    setCartIsActive(false);
  };

  const addCopyHandler = (id) => {
    const cartElementIndex = cartList.findIndex(
      (cartElement) => cartElement.id === id
    );

    const newAmount = cartList[cartElementIndex].amount + 1;

    setCartList((prevCartList) => {
      let newCartList = [...prevCartList];

      newCartList[cartElementIndex].amount = newAmount;

      return newCartList;
    });
  };

  const subCopyHandler = (id) => {
    const cartElementIndex = cartList.findIndex(
      (cartElement) => cartElement.id === id
    );

    const newAmount = cartList[cartElementIndex].amount - 1;

    if (newAmount > 0) {
      setCartList((prevCartList) => {
        let newCartList = [...prevCartList];
        newCartList[cartElementIndex].amount = newAmount;
        return newCartList;
      });
    } else {
      setCartList((prevCartList) => prevCartList.splice(cartElementIndex, 1));
    }
  };

  const buyOrderHandler = () => {
    console.log("cibo acquistato con successo!");
    setCartList([]);
    closeCartHandler();
  };
  return (
    <CartContext.Provider
      value={{
        value: cartList,
        isActive: cartIsActive,
        onAddToCart: addToCartHandler,
        onOpen: openCartHandler,
        onClose: closeCartHandler,
        onAdd: addCopyHandler,
        onSub: subCopyHandler,
        onOrder: buyOrderHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
