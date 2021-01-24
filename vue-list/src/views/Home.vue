<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <Tab></Tab>
  </div>
</template>

<script>
// @ is an alias to /src
import Tab from "@/components/Tab";
export default {
  name: "Home",
  components: {
    Tab
  },
  data() {
    return {
      msg: "vue Page"
    };
  }
};
</script>
<style lang="less" scoped>
.home {
  h1 {
    font-size: 18px;
    text-align: center;
  }
}
</style>
