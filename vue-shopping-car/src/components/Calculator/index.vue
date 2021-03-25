<template>
  <div class="calculator">
    <button @click="setItem(id, price, 'PLUS')">+</button>
    <input type="text" readonly :value="totalMount" />
    <button @click="setItem(id, price, 'MINUS')">-</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {};
  },
  props: {
    id: Number,
    price: Number,
    totalMount: Number
  },
  methods: {
    setItem(id, price, type) {
      this.$store.dispatch("setTotal", {
        price,
        type
      });
      this.$store.dispatch("setCart", {
        id,
        type,
        price
      });
    }
  }
};
</script>

<style lang="less" scoped></style>
