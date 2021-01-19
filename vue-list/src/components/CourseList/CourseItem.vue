<template>
  <div class="course-item">
    <div class="cover">
      <a
        :href="'http://baidu.com/' + item.id"
        target="_blank"
        class="course-lk"
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
        @mousemove="mouseMove"
        ref="card"
      >
        <div class="reflection" ref="refl"></div>
        <img alt="item.course_names" :src="item.logo_url" />
      </a>
    </div>
    <h1 class="course-tt">
      {{ item.course_names }}
    </h1>
    <div :class="['price', { 'price-free': item.price === 0 }]">
      {{ item.price == 0 ? "免费" : `💰${item.price}.00` }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    item: Object,
  },
  methods: {
    mouseOver() {
      console.log("移入");
      const refl = this.$refs.refl;
      refl.style.opacity = 1;
      const card = this.$refs.card;
      card.style.transform = `perspective(500px) scale(2)`;
    },
    mouseLeave() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
      console.log("移出");
    },
    mouseMove() {},
  },
};
</script>

<style lang="less" scoped>
.course-item {
  float: left;
  margin-left: 9px;
  width: 236px;
  height: 221px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 7px 7px 10px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 1px 1px 2px 1px #ececec;
    border-color: #ddd;
  }
  .cover {
  }
  .course-tt {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 40px;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .price {
    color: orangered;
  }
  & .price-free {
    color: green;
  }
}
</style>
