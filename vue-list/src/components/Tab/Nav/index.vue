<template>
  <div
    class="tab-nav"
    v-tab-current="{
      curIdx: tabIndex,
      className: 'nav-item',
      currentClassName: 'nav-current',
    }"
  >
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
import { mapState } from "vuex";
import { tabCurrent } from "@/directives";
export default {
  name: "TabNav",
  components: {
    NavItem,
  },
  computed: {
    ...mapState(["tabIndex"]),
  },
  directives: {
    tabCurrent,
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
