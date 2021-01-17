/**
 * api 配置
 */

const URL = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? "xxx.baidu.com"
      : "https://mock.yonyoucloud.com/mock/16130",
};

const DEFAULT_ITEM = [
  {
    field: "-1",
    field_names: "全部",
  },
];
export { URL, DEFAULT_ITEM };
