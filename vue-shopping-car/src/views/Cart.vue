<template>
  <div class="container">
    <mi-header :backIconShow="true">购物车</mi-header>
  </div>
</template>

<script>
// @ is an alias to /src
import MiHeader from "../components/Header";
export default {
  name: "Cart",
  components: {
    "mi-header": MiHeader
  }
};
</script>
