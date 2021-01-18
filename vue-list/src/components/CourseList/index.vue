<template>
  <div class="course-list-wrap">
    <div class="course-list">
      <course-item
        v-for="(item, index) of courseData"
        :key="index"
        :item="item"
      ></course-item>
    </div>
  </div>
</template>

<script>
import CourseItem from "./CourseItem";
export default {
  name: "CourseList",
  props: {
    courseData: Array,
  },
  components: {
    "course-item": CourseItem,
  },
};
</script>

<style lang="less" scoped></style>
