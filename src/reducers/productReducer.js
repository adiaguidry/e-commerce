import p1 from "../components/img/product1.jpg";
import p2 from "../components/img/product2.jpg";
import p3 from "../components/img/product3.jpg";
import p4 from "../components/img/product4.jpg";
import p5 from "../components/img/product5.jpg";
import p6 from "../components/img/product6.jpg";
import p7 from "../components/img/product7.jpg";
import p8 from "../components/img/product8.jpg";

const initialState = {
  cart: [
    {
      id: 1,
      img: p2,
      title: "Lemons into Lemonade",
      price: "29.99",
      quantity: 1,
      total: 29.99,
      description: "Lemons into Lemonade brightens up any room",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`,
        `fa fa-star-o`
      ]
    },
    {
      id: 0,
      img: p1,
      title: "Wise like an Owl",
      price: "19.99",
      quantity: 1,
      total: 19.99,
      description: "Your style your room",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`,
        `fa fa-star-o`,
        `fa fa-star-o`
      ]
    }
  ],
  cartTotal: {
    subtotal: 0,
    shipping: 0,
    total: 0
  },
  allProducts: [
    {
      id: 0,
      img: p1,
      title: "Wise like an Owl",
      price: "29.99",
      quantity: 1,
      total: 19.99,
      description: "Your style your room",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`,
        `fa fa-star-o`,
        `fa fa-star-o`
      ]
    },
    {
      id: 1,
      img: p2,
      title: "Lemons into Lemonade",
      price: "25.55",
      quantity: 1,
      total: 25.55,
      description: "Lemons into Lemonade brightens up any room",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`,
        `fa fa-star-o`
      ]
    },
    {
      id: 3,
      title: "Smell the Flowers",
      img: p3,
      price: "19.99",
      quantity: 1,
      total: 19.99,
      description: "Bright pink flowers, dark blue background",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`
      ]
    },
    {
      id: 4,
      title: "Leafy greens",
      img: p4,
      price: "25.55",
      quantity: 1,
      total: 25.55,
      description: "Peaceful leafy green atmosphere",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`,
        `fa fa-star-o`
      ]
    },
    {
      id: 5,
      title: "Almost too Pretty",
      img: p5,
      price: "9.99",
      quantity: 1,
      total: 9.99,
      description: "Pretty in pink flowers is almost too pretty",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`
      ]
    },
    {
      id: 6,
      title: "Zebras have stripes",
      img: p6,
      price: "19.99",
      quantity: 1,
      total: 19.99,
      description: "If Zebras have stripes why can't I?",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`
      ]
    },
    {
      id: 7,
      title: "Lots of dots",
      img: p7,
      price: "9.99",
      quantity: 1,
      total: 9.99,
      description: "Lots of dots go good on any wall",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`
      ]
    },
    {
      id: 8,
      title: "What am I looking at",
      img: p8,
      price: "39.99",
      quantity: 1,
      total: 39.99,
      description: "Not sure what you want this is a great option",
      reviews: [
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star`,
        `fa fa-star-o`
      ]
    }
  ]
};

const productReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "GET_PRODUCTS":
      return newState;
    case "ADD_TO_CART":
      newState.cartTotal.subtotal = 0;
      newState.cart.push(action.payload);
      newState.cart.map(product => {
        newState.cartTotal.subtotal = (
          Number(product.total) + Number(newState.cartTotal.subtotal)
        ).toFixed(2);
      });

      return newState;
    case "REMOVE_FROM_CART":
      newState.cartTotal.subtotal = 0;
      newState.cart = newState.cart.filter(p => p.id !== action.payload);

      newState.cart.map(product => {
        newState.cartTotal.subtotal = (
          Number(product.total) + Number(newState.cartTotal.subtotal)
        ).toFixed(2);
      });
      return newState;
    case "INCREASE_Q":
      newState.cartTotal.subtotal = 0;

      if (action.payload.quantity < 10) {
        action.payload.quantity++;
        action.payload.total = (
          action.payload.price * action.payload.quantity
        ).toFixed(2);
      } else {
        action.payload.quantity = action.payload.quantity;
        action.payload.total = action.payload.total;
      }

      newState.cart.map(product => {
        newState.cartTotal.subtotal = (
          Number(product.total) + Number(newState.cartTotal.subtotal)
        ).toFixed(2);
      });

      console.log(newState.cartTotal.subtotal);

      return newState;
    case "DECREASE_Q":
      newState.cartTotal.subtotal = 0;
      //tie in the state product quanity

      if (action.payload.quantity > 1) {
        action.payload.quantity--;
        action.payload.total = (
          action.payload.price * action.payload.quantity
        ).toFixed(2);
      } else {
        action.payload.quantity = action.payload.quantity;
        action.payload.total = action.payload.total;
      }

      newState.cart.map(product => {
        newState.cartTotal.subtotal = (
          Number(product.total) + Number(newState.cartTotal.subtotal)
        ).toFixed(2);
      });

    //shipping price

    default:
      return state;
  }
};

export default productReducer;
