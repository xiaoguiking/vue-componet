<template>
  <div class="container">
    <nav-bar
      :fieldData="fieldData"
      :curIdx="curIdx"
      @selectNav="selectNav(index)"
    />
    <!-- <course-list :courseData="curCourseData" /> -->
    <course-list :courseData="curCourseData" />
  </div>
</template>

<script>
import { DEFAULT_ITEM, DEFAULT_FIELD } from "@/configs/config.js";
import IndexModel from "@/models/index";
import NavBar from "@/components/NavBar";
import CourseList from "@/components/CourseList";
import { filterData } from "@/utils/tool";

const indexModel = new IndexModel();

export default {
  name: "IndexPage",
  data() {
    return {
      fieldData: [],
      courseData: [],
      curCourseData: [],
      curIdx: 1
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
      console.log(courseData, "----------->");

      this.courseData = filterData(this.courseData, DEFAULT_FIELD);
    },
    selectNav(index, field) {
      console.log(index, "------index--");
      this.curIdx = index;
      this.curCourseData = filterData(this.courseData, field);
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
