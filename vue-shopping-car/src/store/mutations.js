export default {
  SET_DATA(state, data) {
    const { phoneData, totalMount, totalPrice, cartData } = data;
    state.phoneData = phoneData;
    state.totalMount = totalMount;
    console.log(totalMount);
    state.totalPrice = totalPrice;
    state.cartData = cartData;
  },
};
