<template>
  <div class="container">
    <nav-bar :fieldData="fieldData" :curIndex="curIndex" />
    <course-list :courseData="courseData" />
  </div>
</template>

<script>
import { DEFAULT_ITEM } from "@/configs/config.js";
import IndexModel from "@/models/index";
import NavBar from "@/components/NavBar";
import CourseList from "@/components/CourseList";
const indexModel = new IndexModel();

export default {
  name: "IndexPage",
  data() {
    return {
      fieldData: [],
      courseData: [],
      curIndex: 0
    };
  },
  components: {
    NavBar,
    CourseList
  },
  mounted() {
    this.getDatas();
  },
  methods: {
    async getDatas() {
      const fieldData = await indexModel.getFieldData(),
        courseData = await indexModel.getCourseData();
      this.fieldData = DEFAULT_ITEM.concat(fieldData);
      this.courseData = courseData;
      console.log(fieldData, courseData, "----------->");
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
