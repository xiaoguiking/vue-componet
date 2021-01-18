<template>
  <div class="course-item">
    <div class="cover">
      <a
        :href="'http://baidu.com/' + item.id"
        target="_blank"
        class="course-lk"
      >
        <img alt="item.course_names" :src="item.logo_url" />
      </a>
    </div>
    <h1 class="course-tt">
      {{ item.course_names }}
    </h1>
    <div class="price">{{ item.price }}</div>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: {
    item: Object,
  },
};
</script>

<style lang="less" scoped></style>
