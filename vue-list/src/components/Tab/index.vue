<template>
  <div class="tab">
    <tab-nav :navData="navData"></tab-nav>
    <tab-content :contentData="contentData"></tab-content>
  </div>
</template>

<script>
import TabContent from "./Content";
import TabNav from "./Nav";

import navData from "@/data/nav";
import contentData from "@/data/content";

export default {
  name: "Tab",
  components: {
    TabContent,
    TabNav,
  },
  data() {
    return {
      navData,
      contentData,
    };
  },
};
</script>

<style lang="less" scoped>
.tab {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  margin: 50px auto;
}
</style>
