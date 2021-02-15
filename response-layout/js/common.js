/**
 * 控制字体
 */
(function (doc) {
  var oMenuBtn = doc.querySelector(".header .fa-bars"),
    oNav = doc.querySelector(".header .header-nav");

  console.log(oMenuBtn, oNav, "元素");

  var init = function () {
    setFontSize();
    bindEvent();
  };

  function bindEvent() {
    window.addEventListener("resize", setFontSize, false);
    oMenuBtn.addEventListener("click", showNav, false);
  }

  function setFontSize() {
    var cWidth = doc.documentElement.clientWidth;
    console.log(cWidth);

    if (cWidth <= 414) {
      doc.documentElement.style.fontSize = cWidth / 37.5 + "px";
    } else {
      var fontSize = doc.documentElement.style.fontSize;
      if (fontSize !== "62.5%") {
        doc.documentElement.style.fontSize = "62.5%";
      } else {
      }
    }

    if (cWidth > 768) {
      oNav.style.display = "block";
    } else {
      oNav.style.display = "none";
    }
  }

  function showNav() {
    var isShow = oNav.style.display;
    console.log(isShow);
    if (isShow === "block") {
      oNav.style.display = "none";
    } else {
      oNav.style.display = "block";
    }
  }
  init();
})(document);
