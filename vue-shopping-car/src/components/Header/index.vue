<template>
  <header class="header">
    <BackIcon :backIconShow="backIconShow" />
    <h1><slot></slot></h1>
    <CartIcon :cartIconShow="cartIconShow" />
  </header>
</template>

<script>
import BackIcon from "./BackIcon";
import CartIcon from "./CartIcon";
export default {
  name: "MiHeader",
  props: {
    backIconShow: Boolean,
    cartIconShow: Boolean,
  },
  components: {
    BackIcon,
    CartIcon,
  },
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6704;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 60px;
  // height: 0.44rem;
  height: 4.4rem;
  // font-size: 0.18rem;
  color: #fff;
}
</style>
