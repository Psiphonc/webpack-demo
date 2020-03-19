import $ from "jquery";
import "./css/1.css";
import "./css/1.less";
import "./css/1.scss";

$(function() {
  $("li:odd").css("background-color", "green");
  $("li:even").css("background-color", "lightblue");
});

class Person {
  static info = "aaa";
}

console.log(Person.info);

import Vue from "vue";
import App from "./components/App.vue";

const vm = new Vue({
  el: "#app",
  render: h => h(App)
});
