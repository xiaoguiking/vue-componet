<template>
  <div class="total-panel">
    <span class="total-price">
      总价: $ <span class="price"> {{ totalPrice }} </span>
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ToTalPanel",
  computed: {
    ...mapState(["totalMount", "totalPrice", "cartData"]),
  },
  updated() {
    localStorage.setItem("totalMount", this.totalMount);
    localStorage.setItem("totalPrice", this.totalPrice);
    localStorage.setItem("cartData", JSON.stringify(this.cartData));
  },
};
</script>

<style lang="less" scoped>
.total-panel {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 20px;
  background: #fff;
  border-top: 1px solid #ddd;
  z-index: 10;
  text-align: right;
  padding-right: 15px;

  .total-price {
    font-size: 20px;
    color: orange;
    font-weight: 700;
  }
}
</style>
