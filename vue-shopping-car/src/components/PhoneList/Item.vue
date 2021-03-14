<template>
  <div class="list-item">
    <div class="img-wrap">
      <img :src="item.img" :alt="item.productName" />
    </div>
    <div class="info-wrap">
      <h1 class="product-name">{{ item.productName }}</h1>
      <p class="slogan">{{ item.slogan }}</p>
      <p class="price">${{ item.price }}</p>
      <p class="button">
        <button @click="addCart(item.price, 'PLUS')">加入购物车</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: Object
  },
  methods: {
    addCart(price, type) {
      console.log("addPort", price);
      this.$store.dispatch("setTotal", {
        type,
        price: Number(price)
      });
    }
  }
};
</script>

<style lang="less" scoped>
.list-item {
  position: relative;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  height: 120px;
  // top: 50px;

  .img-wrap {
    // width: 1.2rem;
    // height: 1.2rem;
    width: 120px;
    height: 120px;
    border-right: 1px solid #ddd;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-wrap {
    // position: absolute;
    // top: 0;
    // left: 0;
    width: 100%;
    flex: 1;
    // height: 1.2rem;
    height: 120px;
    // padding: 0.1rem 0.1rem 0.1rem 1.3rem;
    padding: 10px 5px 10px 10px;
    box-sizing: border-box;

    .product-name {
      color: #000;
      font-size: 0.16rem;
    }

    .slogan {
      margin-top: 0.15rem;
      color: #999;
      font-size: 0.12rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1; //例如超过2行显示省略号
      overflow: hidden;
    }
    .price {
      font-size: 16px;
      color: #ff6704;
    }
    .button {
      text-align: right;

      button {
        border-color: #ff6704;
        color: #ff6704;
        background: #fff;
      }
    }
  }
}
</style>
