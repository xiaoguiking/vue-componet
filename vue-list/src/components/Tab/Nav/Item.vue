<template>
  <div @click="changeTabIndex(index)" class="nav-item">
    {{ item | replaceNumToChs }}
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { replaceNumToChs } from "@/filters";
export default {
  name: "NavItem",
  props: {
    item: String,
    index: Number,
  },
  // 注册过滤器
  filters: {
    replaceNumToChs,
  },
  methods: {
    ...mapMutations(["changeTabIndex"]),
  },
};
</script>

<style lang="less" scoped>
.nav-item {
  float: left;
  width: 25%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  &.nav-current {
    background-color: #000;
    color: #fff;
  }
}
</style>
