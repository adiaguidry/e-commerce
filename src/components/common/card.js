import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import * as createAction from "../../actions/productActions";
import { A } from "hookrouter";
const Card = ({ product }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [shopping, setShopping] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setShopping(true);
  };

  const addToCart = product => {
    dispatch(createAction.addToCart(product));
    setShopping(false);
    console.log(shopping);
    // handleClose();
  };

  return (
    <React.Fragment>
      <div className="card" onClick={handleOpen}>
        <div>
          <img width="200px" src={product.img} alt="" />
        </div>
        <div className="lead">
          <p>{product.title}</p>
          <p className="price">Price {product.price}</p>
          <p>
            {product.reviews.map(r => (
              <i className={r} aria-hidden="true"></i>
            ))}
            <span>(review)</span>
          </p>
        </div>
      </div>
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div className="shop-modal">
            <i className="fas fa-times fa-lrg" onClick={handleClose}></i>
            <div className="lead">
              <div>
                <img width="200px" src={product.img} alt="" />
              </div>
              <h2 id="simple-modal-title">{product.title}</h2>
              <p className="price">Price {product.price}</p>
              <p id="simple-modal-description">{product.description}</p>

              {shopping ? (
                <div>
                  <button
                    className="cancel"
                    type="button"
                    onClick={handleClose}
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="cancel"
                    type="button"
                    onClick={handleClose}
                  >
                    Continue Shopping
                  </button>
                  <button type="button">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>

                    <A href="/cart">Go to Cart</A>
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Card;
