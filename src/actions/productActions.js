import { CONSTANTS } from ".";

export const getProducts = products => {
  return {
    type: CONSTANTS.GET_PRODUCTS,
    payload: products
  };
};

export const addToCart = product => {
  return {
    type: CONSTANTS.ADD_TO_CART,
    payload: product
  };
};

export const RemoveFromCart = product => {
  return {
    type: CONSTANTS.REMOVE_FROM_CART,
    payload: product
  };
};

export const increaseQ = product => {
  return {
    type: CONSTANTS.INCREASE_Q,
    payload: product
  };
};

export const decreaseQ = product => {
  return {
    type: CONSTANTS.DECREASE_Q,
    payload: product
  };
};
