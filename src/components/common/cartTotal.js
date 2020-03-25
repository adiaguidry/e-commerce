import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as createAction from "../../actions/productActions";

const CartTotal = ({ cartTotal }) => {
  const [value, setValue] = React.useState("0");
  const dispatch = useDispatch();

  const handleChange = e => {
    console.log(Number(e.target.value));
    setValue(e.target.value);
    dispatch(createAction.setShipping(e.target.value));
  };
  return (
    <div>
      <div>
        <h3 className="cart-total-title">cart total</h3>
      </div>
      <div className="cart-total-subtotal">
        <h3>subtotal</h3>
        <span>${cartTotal.subtotal}</span>
      </div>
      <div className="cart-total-shipping">
        <h3>shipping</h3>
        <RadioGroup
          aria-label="shipping"
          name="shipping"
          value={value}
          onChange={handleChange}
        >
          <form>
            <div className="shipping-type">
              <div>
                <FormControlLabel
                  value={"0"}
                  control={<Radio />}
                  label="Free"
                />
              </div>
              <div>
                <span>$0.00</span>
              </div>
            </div>
            <div className="shipping-type">
              <div>
                <FormControlLabel
                  value={"6.99"}
                  control={<Radio />}
                  label="Standard"
                />
              </div>
              <div>
                <span>$6.99</span>
              </div>
            </div>
            <div className="shipping-type">
              <div>
                <FormControlLabel
                  value={"12.99"}
                  control={<Radio />}
                  label="Express"
                />
              </div>
              <div>
                <span>$12.99</span>
              </div>
            </div>
          </form>
        </RadioGroup>
      </div>
      <div className="cart-total-total">
        <h3>Total</h3>
        <span>${cartTotal.total}</span>
      </div>
      <div className="btn-style">
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
