/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


/*
const msg: string = "Hello!";
alert(msg);
*/
function loadCSS(filePath) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = filePath;
  document.head.appendChild(link);
}
function createButtonStyle(containerID, link, name) {
  var button = document.createElement("a");
  button.type = "button";
  button.textContent = name;
  button.className = "przycisk";
  button.addEventListener("click", function () {
    loadCSS(link);
  });
  var container = document.getElementById(containerID);
  if (container) {
    container.appendChild(button);
  }
}
loadCSS("style/style.css");
createButtonStyle("menu", "style/style.css", "Klasa 1");
createButtonStyle("menu", "style/zmiana.css", "Zmiana tła");
/******/ })()
;