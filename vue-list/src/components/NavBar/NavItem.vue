<template>
  <div class="nav-item">
    <a
      href="javascript:;"
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
    curIndex: Number
  }
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
