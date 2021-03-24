<template>
  <div class="container">
    <mi-header :backIconShow="true">购物车</mi-header>
    <cart-list></cart-list>
    <total-panel></total-panel>
  </div>
</template>

<script>
// @ is an alias to /src
import MiHeader from "../components/Header";
import CartList from "@/components/CartList";
import TotalPanel from "@/components/TotalPanel";

export default {
  name: "Cart",
  components: {
    "mi-header": MiHeader,
    CartList,
    TotalPanel
  }, 
  mounted() {
    // console.log(this.$store);
    console.log(this.$store.dispatch("setData"));
  }
};
</script>
