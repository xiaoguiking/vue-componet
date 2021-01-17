/**
 * 数据请求
 */

import HTTP from "@/utils/http";

export default class IndexModel extends HTTP {
  //
  getFieldData() {
    return new Promise((resolve, reject) => {
      this.ajaxGet("/vuex/course/get_course_fields", false, {
        success(data) {
          resolve(data.result);
        },
        err(err) {
          reject(err);
        }
      });
    });
  }
  // 课程
  getCourseData() {
    return new Promise((resolve, reject) => {
      this.ajaxGet("/vuex/course/get_course/all", false, {
        success(data) {
          resolve(data.result);
        },
        err(err) {
          reject(err);
        }
      });
    });
  }
}
