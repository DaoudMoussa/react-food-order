import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";

import CartContext from "../../Store/cart-context";

import classes from "./Cart.module.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  let totAmount = 0;
  const cartMealsList = cartCtx.value.map((cartMeal) => {
    totAmount += cartMeal.price * cartMeal.amount;
    return (
      <CartItem
        amount={cartMeal.amount}
        key={cartMeal.id}
        id={cartMeal.id}
        price={cartMeal.price}
        name={cartMeal.name}
        description={cartMeal.description}
      />
    );
  });

  return (
    <Modal onClose={cartCtx.onClose}>
        <ul className={classes['cart-items']}>{cartMealsList}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totAmount.toFixed(2)} €</span>
        </div>
        <div className={classes.actions}>
            <button onClick={cartCtx.onClose} className={classes["button--alt"]}>Close</button>
            <button onClick={cartCtx.onOrder} className={classes.button}>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;
