import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";

import CartContext from "../../Store/cart-context";

import classes from "./Cart.module.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = item => cartCtx.onAddToCart({...item, amount: 1})

  const removeItemHandler = id => cartCtx.onRemove(id)

  const cartMealsList = cartCtx.value.map((cartMeal) => {
    return (
      <CartItem
        amount={cartMeal.amount}
        key={cartMeal.id}
        id={cartMeal.id}
        price={cartMeal.price}
        name={cartMeal.name}
        description={cartMeal.description}
        onAdd={addItemHandler.bind(null, cartMeal)}
        onRemove={removeItemHandler.bind(null, cartMeal.id)}
      />
    );
  });

  return (
    <Modal onClose={cartCtx.onClose}>
        <ul className={classes['cart-items']}>{cartMealsList}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{cartCtx.totalAmount} €</span>
        </div>
        <div className={classes.actions}>
            <button onClick={cartCtx.onClose} className={classes["button--alt"]}>Close</button>
            <button onClick={cartCtx.onOrder} className={classes.button}>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;
