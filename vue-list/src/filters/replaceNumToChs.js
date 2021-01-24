export default (value) => {
  return value.replace(/\d+/g, (node, key) => {
    return npmReplace(node);
  });
};

function npmReplace(num) {
  switch (num) {
    case "1":
      return "一";
    case "2":
      return "二";
    case "3":
      return "三";
    case "4":
      return "四";
    default:
      break;
  }
}
