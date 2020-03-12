import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as createAction from "../../actions/productActions";
import CartTotal from "./cartTotal";

const CartTable = () => {
  const cart = useSelector(state => state.products.cart);
  const cartTotal = useSelector(state => state.products.cartTotal);
  const [total, setTotal] = useState();
  const [remove, setRemove] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createAction.RemoveFromCart(remove));
  }, [remove]);

  useEffect(() => {
    setTotal(cart.price);
  }, [quantity]);

  const increaseQ = product => {
    dispatch(createAction.increaseQ(product));
    setQuantity(quantity + 1);
  };
  const decreaseQ = product => {
    dispatch(createAction.decreaseQ(product));
    setQuantity(quantity - 1);
  };

  return (
    <div className="cart">
      <div className="cart-layout">
        <table cellspacing="0">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cart.map(p => (
              <tr key={p.id}>
                <td>
                  <div>
                    <img width="100px" src={p.img} alt="" />
                    <span>{p.title}</span>
                  </div>
                </td>
                <td>{p.price}</td>
                <td>
                  <div className="qty-input">
                    <i
                      style={{ cursor: "pointer" }}
                      className="fas fa-minus"
                      onClick={() => {
                        decreaseQ(p);
                        console.log("decrease");
                      }}
                    ></i>
                    <input type="text" value={p.quantity} />
                    <i
                      style={{ cursor: "pointer" }}
                      className="fas fa-plus"
                      onClick={() => {
                        console.log("increase");
                        increaseQ(p);
                      }}
                    ></i>
                  </div>
                </td>
                <td>{p.total}</td>
                <td
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setRemove(p.id);
                  }}
                >
                  &#10005;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-total">
        <CartTotal cartTotal={cartTotal} />
      </div>
    </div>
  );
};

export default CartTable;
