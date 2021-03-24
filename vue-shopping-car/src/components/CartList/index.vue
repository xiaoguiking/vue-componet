<template>
  <div class="cart-list">
    <list-item
      v-for="(item, index) of cartData"
      :key="index"
      :item="item"
    ></list-item>
    <total-panel></total-panel>
  </div>
</template>

<script>
import ListItem from "./Item";
import { mapState } from "vuex";
import TotalPanel from "@/components/TotalPanel";

export default {
  name: "CarList",
  components: {
    ListItem,
    TotalPanel
  },
  computed: {
    ...mapState(["cartData"])
  }
};
</script>

<style lang="less" scoped>
.cart-list {
  position: relative;
  top: 60px;
}
</style>
