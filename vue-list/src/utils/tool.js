/**
 *  数据过滤方法
 */
function filterData(data, field) {
  if (field === "-1") {
    return data;
  }
  return data.filter(i => i.field === field);
}

export { filterData };
