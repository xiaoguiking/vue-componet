<template>
  <div class="container">
    <ul>
      <li v-for="(item, index) of listdata" :key="index">
        {{ item.user_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "IndexPage",
  data() {
    return {
      listdata: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const _self = this;
      $.ajax({
        url: "https://mock.yonyoucloud.com/mock/7866/order/list",
        type: "get",
        success: function(data) {
          console.log(data);
          // console.log(this, "this");
          // 写成_selt 因为this指向问题
          _self.listdata = data.result.item_list;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  li {
    list-style: none;
  }
}
</style>
