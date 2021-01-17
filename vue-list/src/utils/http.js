/**
 * jquery 封装
 */

import $ from "jquery";
import { URL } from "@/configs/config";

export default class HTTP {
  ajaxGet(url, isJSONP, options) {
    $.ajax({
      url: URL.BASE_URL + url,
      isJSONP: isJSONP ? "jsonp" : "json",
      success(data) {
        options.success(data);
      },
      error(err) {
        options.error(err);
      }
    });
  }
}
