<template>
  <div class="cart-list">
    <list-item
      v-for="(item, index) of cartData"
      :key="index"
      :item="item"
    ></list-item>
  </div>
</template>

<script>
import ListItem from "./Item";
import { mapState } from "vuex";

export default {
  name: "CarList",
  components: {
    ListItem,
  },
  computed: {
    ...mapState(["cartData"]),
  },
};
</script>

<style lang="less" scoped>
.cart-list {
  position: relative;
  top: 60px;
}
</style>
