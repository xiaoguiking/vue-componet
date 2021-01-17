<template>
  <div class="nav-bar">
    <nav-item
      v-for="(item, index) of fieldData"
      :key="index"
      :item="item"
      :index="index"
      :curIndex="curIndex"
    ></nav-item>
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  props: {
    fieldData: Array,
    curIndex: Number
  },
  components: {
    "nav-item": NavItem
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  height: 44px;
  background-color: #efefef;
}
</style>
