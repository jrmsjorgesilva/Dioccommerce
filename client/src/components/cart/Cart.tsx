import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { add, subtract } from "../../store/store.cart";

const Cart = () => {
  const dispatch = useDispatch();

  const cart: any = useSelector((state: RootState) => state.cart);

  console.log('cart', cart);

  return (
    <div>
      <FaCartArrowDown role="button" onClick={() => dispatch(add())} />
      <span style={{ float: 'right' }}>{cart.counter}</span>
    </div>
  );
};

export default Cart;
