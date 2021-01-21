<template>
  <div class="nav-item">
    <a
      href="javascript:;"
      @click="select(index)"
      :class="['nav-lk', { 'nav-cur': index === curIndex }]"
    >
      {{ item.field_names }}
    </a>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    item: Object,
    index: Number,
    curIndex: Number,
  },
  methods: {
    select(index) {
      console.log(index);
      // this.$emit("selectNav", index);
    },
  },
};
</script>

<style lang="less" scoped>
.nav-item {
  float: left;
  width: 144px;
  line-height: 44px;
  height: 44px;
  text-align: center;

  .nav-lk {
    font-size: 14px;

    &.nav-cur {
      color: #169ed9;
    }
  }
}
</style>
