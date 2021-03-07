// import FastClick from "./fastclick";

document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 37.5 + "px";
console.log(document.documentElement.style.fontSize);
// window.addEventListener(
//   "load",
//   function() {
//     FastClick.attach(document.body);
//   },
//   false
// );

document.documentElement.addEventListener(
  "touchmove",
  function(e) {
    console.log(e, "=========touchmove=========>");
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  },
  false
);
