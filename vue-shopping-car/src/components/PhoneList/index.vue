<template>
  <div class="phone-list">
    <list-item
      v-for="(item, index) of phoneData"
      :key="index"
      :item="item"
    ></list-item>
  </div>
</template>

<script>
import ListItem from "./Item.vue";
import { mapState } from "vuex";

export default {
  name: "PhoneList",
  components: {
    "list-item": ListItem,
  },
  computed: {
    ...mapState(["phoneData"]),
  },
};
</script>

<style lang="less" scoped>
.phone-list {
  position: relative;
  top: 60px;
}
</style>
