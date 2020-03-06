import React, { useState } from "react";
import brick from "../img/brick.jpg";
import Modal from "@material-ui/core/Modal";
const Card = ({ title, price }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="card" onClick={handleOpen}>
        <div>
          <img src="https://source.unsplash.com/random/200x200" alt="" />
        </div>
        <div className="lead">
          <p>{title}</p>
          <p className="price">Price {price}</p>
          <p>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
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
            <div className="lead">
              <div>
                <img src="https://source.unsplash.com/random/200x200" alt="" />
              </div>
              <h2 id="simple-modal-title">{title}</h2>
              <p className="price">Price {price}</p>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
              <button type="button" onClick={handleClose}>
                close Modal
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default Card;
