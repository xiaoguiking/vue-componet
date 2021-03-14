export default {
  SET_DATA(state, data) {
    const { phoneData, totalMount, totalPrice, cartData } = data;
    state.phoneData = phoneData;
    state.totalMount = totalMount;
    console.log(totalMount);
    state.totalPrice = totalPrice;
    state.cartData = cartData;
  },
  SET_TOTAL(state, payload) {
    const { type, price } = payload;
    switch (type) {
      case "PLUS":
        state.totalPrice += price;
        state.totalMount += 1;
        break;
      case "MINUS":
        state.totalPrice -= price;
        state.totalMount -= 1;
        break;

      default:
        break;
    }
  }
};
