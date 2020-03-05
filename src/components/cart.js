import React from "react";
import PageBanner from "./common/pageBanner";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Cart = () => {
  const [value, setValue] = React.useState("free");

  const handleChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <PageBanner title={"cart"} />
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
              <tr>
                <td>
                  <div>
                    <img
                      src="https://source.unsplash.com/random/100x100"
                      alt=""
                    />
                    <span>Beautiful design black and white </span>
                  </div>
                </td>
                <td>29.99</td>
                <td>
                  <div class="qty-input">
                    <i class="far fa-minus-square"></i>{" "}
                    <input type="text" value="2" />
                    <i class="far fa-plus-square"></i>{" "}
                  </div>
                </td>
                <td>29.99</td>
                <td>&#10005;</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <img
                      src="https://source.unsplash.com/random/100x100"
                      alt=""
                    />
                    <span>Beautiful design black and white </span>
                  </div>
                </td>
                <td>18.99</td>
                <td>
                  {" "}
                  <div class="qty-input">
                    <i class="far fa-minus-square"></i>
                    <input type="text" value="2" />
                    <i class="far fa-plus-square"></i>
                  </div>
                </td>
                <td>18.99</td>
                <td>&#10005;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart-total">
          <div>
            <h3 className="cart-total-title">cart total</h3>
          </div>
          <div className="cart-total-subtotal">
            <h3>subtotal</h3>
            <span>$40.00</span>
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
                      value="free"
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
                      value="standard"
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
                      value="express"
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
            <span>$47.00</span>
          </div>
          <div className="btn-style">
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
