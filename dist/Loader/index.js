import { _ as _objectSpread2 } from '../chunks/_rollupPluginBabelHelpers-fe91c0c3.js';
import React from 'react';
import { s as styleInject } from '../chunks/style-inject.es-1d18fb65.js';

var css = ".style_loader__3tH4v svg {\n  -webkit-animation: style_progress-circular-rotate__3RabE 1.4s linear infinite;\n  animation: style_progress-circular-rotate__3RabE 1.4s linear infinite;\n  transform-origin: center center;\n  transition: all .2s ease-in-out;\n}\n\n.style_loader__overlay__IMikF {\n  fill: transparent;\n  -webkit-animation: style_progress-circular-dash__24c2H 1.4s ease-in-out infinite;\n  animation: style_progress-circular-dash__24c2H 1.4s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke-dasharray: 80,200;\n  stroke-dashoffset: 0px;\n  transition: all .6s ease-in-out\n}\n\n@-webkit-keyframes style_progress-circular-dash__24c2H {\n  0% {\n      stroke-dasharray: 1,200;\n      stroke-dashoffset: 0px\n  }\n\n  50% {\n      stroke-dasharray: 100,200;\n      stroke-dashoffset: -15px\n  }\n\n  to {\n      stroke-dasharray: 100,200;\n      stroke-dashoffset: -125px\n  }\n}\n\n@keyframes style_progress-circular-dash__24c2H {\n  0% {\n      stroke-dasharray: 1,200;\n      stroke-dashoffset: 0px\n  }\n\n  50% {\n      stroke-dasharray: 100,200;\n      stroke-dashoffset: -15px\n  }\n\n  to {\n      stroke-dasharray: 100,200;\n      stroke-dashoffset: -125px\n  }\n}\n\n@-webkit-keyframes style_progress-circular-rotate__3RabE {\n  to {\n      transform: rotate(1turn)\n  }\n}\n\n@keyframes style_progress-circular-rotate__3RabE {\n  to {\n      transform: rotate(1turn)\n  }\n}\n";
styleInject(css);

var Loader = function Loader(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 25 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 25 : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#2F80ED' : _ref$color,
      className = _ref.className,
      style = _ref.style;
  console.log('puk');

  var loaderStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    width: width,
    height: height
  });

  return /*#__PURE__*/React.createElement("div", {
    style: loaderStyle,
    className: (className ? className + " " : "") + "style_loader__3tH4v"
  }, /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    className: "style_loader__3tH4v",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "21.904 21.904 43.809 43.809",
    stroke: color,
    style: {
      transform: 'rotate(0deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "43.809",
    cy: "43.809",
    r: "20",
    strokeWidth: "3.809",
    strokeDasharray: "125.664",
    strokeDashoffset: "125.663px",
    className: "style_loader__overlay__IMikF"
  })));
};

export { Loader };
