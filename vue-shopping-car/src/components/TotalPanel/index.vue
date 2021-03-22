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
    ...mapState(["totalPrice"]),
  },
};
</script>

<style lang="less" scoped>
</style>