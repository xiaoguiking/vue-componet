# vue-componet

- vue 组件化流程
- vue-shopping-car 购物车

[toc]

## vue 组件化流程

### 数据

- 数据
  mock 数据
  接口
  分析数据
  数据模型
  导航 get_course_fields
  课程 get_course_all

### ajax 封装

- 封装
  二次封装 ajax
  数据请求模型 数据请求 models

### vue 组件

- 导航 选项卡
  index -------> NavItem v-for
  NavItem

- 课程列表
  index ---------> CourseItem v-for
  CourseItem
  https://www.html5tricks.com/demo/vue-image-hover-animation/index.html

### vue 指令

- Tab 选项卡功能组件
- Vue.filter 过滤器
- vue 指令 选项卡复用
- mixin

## vue-vuex 购物车

## css+ js 响应式布局

> em 概述

```
以原始元素16px为基础,
<div>
  <p>文字</p>
</div>
无父级，以原始元素为基础 2em:  16px * 2
有父级： div: font-size: 20px    p: 2em  ======>  20px * 2
```

> rem 概述

```
默认根元素为基础 root em: 16px;
html {
  font-size: 20px;
}
<div>
  <p>文字</p>
</div>
p: 2em;    实际2em： 20px * 2
```

> vh/ vw 概述

```
viewport width(height)

可视话窗口的宽度、高度 ，不存在继承问题，将可视的窗口分成100份
```
