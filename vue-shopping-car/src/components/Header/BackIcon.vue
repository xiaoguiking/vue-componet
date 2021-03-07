<template>
  <router-link to="/" class="back-icon" v-if="backIconShow">返回</router-link>
</template>

<script>
export default {
  name: "BackIcon",
  props: {
    backIconShow: Boolean
  }
};
</script>

<style lang="less" scoped>
.back-icon {
  position: absolute;
  top: 1.15rem;
  left: 1.15rem;
  font-size: 0.14rem;
  color: #fff;
  text-decoration: none;
}
</style>
