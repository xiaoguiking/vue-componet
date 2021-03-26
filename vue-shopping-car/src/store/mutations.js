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
    console.log(payload, "pay");
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
  },

  SET_CART(state, payload) {
    const { type, id, img, productName, price, slogan } = payload;
    const index = state.cartData.findIndex(item => Number(item.id) === id);
    console.log("setcart================>", index);
    if (index === -1) {
      state.cartData.push({
        id,
        img,
        productName,
        price,
        slogan,
        totalMount: 1,
        totalPrice: price
      });
    } else {
      switch (type) {
        case "PLUS":
          state.cartData[index].totalMount += 1;
          state.cartData[index].totalPrice += price;
          break;
        case "MINUS":
          state.cartData[index].totalMount -= 1;
          state.cartData[index].totalPrice -= price;
          // 是0 的条件时候
          if (!state.cartData[index].totalMount) {
            console.log("cartData");
            // 过滤掉数据
            state.cartData = state.cartData.filter(
              item => Number(item.id) !== id
            );
          }

          break;
        default:
          break;
      }
    }
    console.log(state, payload, "setCart");
  }
};
