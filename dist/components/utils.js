"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSelected = void 0;
var CACHE = {};

var normalize = function normalize(link) {
  if (!CACHE[link]) {
    var l = document.createElement("a");
    l.href = link;
    CACHE[link] = l.pathname;
  }

  return CACHE[link];
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