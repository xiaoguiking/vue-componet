<template>
  <router-link to="/cart" class="cart-icon" v-if="cartIconShow">
    <span class="cart"> 购物车({{ totalMount }}) </span>
  </router-link>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CartIcon",
  data() {
    return {
      // totalMount: "100",
    };
  },
  props: {
    cartIconShow: Boolean
  },
  computed: {
    ...mapState(["totalMount", "totalPrice", "cartData"])
  },
  updated() {
    localStorage.setItem("totalMount", this.totalMount);
    localStorage.setItem("totalPrice", this.totalPrice);
    localStorage.setItem("cartData", JSON.stringify(this.cartData));
  }
};
</script>

<style lang="less" scoped>
.cart-icon {
  color: #fff;
  .cart {
    position: absolute;
    top: 1.45rem;
    right: 1.15rem;
    font-size: 0.14rem;
  }
}
</style>
