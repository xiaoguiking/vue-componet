<template>
  <div class="nav-bar">
    <nav-item
      v-for="(item, index) of fieldData"
      :key="index"
      :item="item"
      :index="index"
      :curIdx="curIdx"
      @click="selectNav(curIndex)"
    >
      ></nav-item
    >
  </div>
</template>

<script>
import NavItem from "./NavItem";
export default {
  props: {
    fieldData: Array,
    curIdx: Number,
    selectNav: Function
  },
  components: {
    "nav-item": NavItem
  },
  // methods: {
  //   select(index) {
  //     console.log(index);
  //     this.$emit("selectNav", index);
  //   }
  // }
  methods: {
    select(curIdx) {
      console.log(curIdx);
    }
  }
};
</script>

<style lang="less" scoped>
.nav-bar {
  height: 44px;
  background-color: #efefef;
}
</style>
