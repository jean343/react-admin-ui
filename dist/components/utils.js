"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerResize = exports.isSelected = void 0;

var normalize = function normalize(link) {
  if (link && link[0] !== "/") {
    link = "/" + link;
  }

  return link;
};

var getPath = function getPath(obj) {
  if (obj && obj.pathname) {
    return obj.pathname;
  }

  return obj;
};

var isSelected = function isSelected(selected, href, to) {
  var left = normalize(getPath(selected));
  var right = normalize(getPath(href) || getPath(to));
  return left === right;
};

exports.isSelected = isSelected;

var triggerResize = function triggerResize(e) {
  if (e.propertyName === "transform") {
    window.dispatchEvent(new Event('resize'));
  }
};

exports.triggerResize = triggerResize;