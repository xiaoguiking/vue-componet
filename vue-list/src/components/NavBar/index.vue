<template>
  <div class="nav-bar">
    <nav-item
      v-for="(item, index) of fieldData"
      :key="index"
      :item="item"
      :index="index"
      :curIndex="curIndex"
      @selectNav="selectNav"
    ></nav-item>
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  props: {
    fieldData: Array,
    curIndex: Number,
  },
  components: {
    "nav-item": NavItem,
  },
  methods: {
    select(index) {
      console.log(index);
      this.$emit("selectNav", index);
    },
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  height: 44px;
  background-color: #efefef;
}
</style>
