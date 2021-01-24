<template>
  <div class="tab-nav">
    <nav-item
      v-for="(item, index) of navData"
      :item="item"
      :key="index"
      :index="index"
    >
    </nav-item>
  </div>
</template>

<script>
import NavItem from "./Item";
export default {
  name: "TabNav",
  components: {
    NavItem,
  },
  props: {
    navData: Array,
  },
};
</script>

<style lang="less" scoped>
.tab-nav {
  height: 50px;
  border-bottom: 1px solid #ccc;
}
</style>
