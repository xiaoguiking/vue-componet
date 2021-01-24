<template>
  <div class="tab-content">
    {{ contentData[tabIndex] | replaceNumToChs }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import { replaceNumToChs } from "@/filters";

export default {
  name: "TabContent",
  props: {
    contentData: Array
  },
  // 注册过滤器
  filters: {
    replaceNumToChs
  },
  computed: {
    ...mapState(["tabIndex"])
  }
};
</script>

<style lang="less" scoped>
.tab-content {
  height: 450px;
  line-height: 450px;
  text-align: center;
  font-size: 30px;
}
</style>
