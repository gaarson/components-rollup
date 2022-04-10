import { _ as _getClassName } from '../chunks/getClassName-5e1d2a76.js';
import React from 'react';
import { s as styleInject } from '../chunks/style-inject.es-1d18fb65.js';

var css = "/*************** radio **************/\n.style_label__NWmwl {\n  position: relative;\n  display: flex;\n  align-items: center;  \n  height: 28px;\n  line-height: 28px; \n  text-align: center;\n  vertical-align: middle; \n}\n\n.style_span__3Lz7i {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n}\n\n/*************** flag checkbox **************/\n\n.style_flag_span__30K5t {\n  position: relative;\n  display: flex; \n  width: 130px;\n  height: 100%; \n  line-height: 22px;\n  left: 0px;       \n  color:var(--text);  \n}\n\n.style_flag_span_disable__3oHKW {\n  position: relative;\n  display: flex; \n  opacity: 0.5;\n  color: var(--disabled-text);  \n}\n\n.style_span__3Lz7i:hover {\n  background: rgba(49, 116, 230, 0.1);\n}\n\n.style_flag_input__cWEan {\n  position: relative;\n  display: flex; \n  cursor: pointer;\n  background-color: var(--white);  \n}\n\n.style_flag_input__cWEan:hover {\n  background: var(--checkbox-label-background);\n  border-radius: 2px;\n}\n\n/* прячем стандартный элемент за область видимости */\n.style_flag_input__cWEan[type=\"radio\"]:checked, \n.style_flag_input__cWEan[type=\"radio\"]:not(:checked) \n{\n  position: absolute;\n  opacity: 0;    \n}\n \n.style_flag_input__cWEan[type=\"radio\"]:checked + span, \n.style_flag_input__cWEan[type=\"radio\"]:not(:checked) + span {\n  position: relative;\n  display: flex;\n  flex-direction: row;  \n  padding-left: 24px;\n  line-height: 22px;\n  cursor: pointer;    \n}\n\n/* стилизованные контейнеры для переключателей */\n.style_flag_input__cWEan[type=\"radio\"]:checked + span:before, \n.style_flag_input__cWEan[type=\"radio\"]:not(:checked) + span:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 2px;\n  display: flex;\n  flex-direction: row;     \n  width: 16px;\n  height: 16px;    \n  border: 1px solid var(--checkbox-border-grey);\n  background-color: var(--white);\n  border-radius: 100%;  /* круглый контейнер */  \n}\n\n.style_flag_input_error__1nv-I[type=\"radio\"]:checked + span:before, \n.style_flag_input_error__1nv-I[type=\"radio\"]:not(:checked) + span:before {        \n  border: 1px solid var(--checkbox-orange); /**/    \n}\n\n/* синий border для переключателей в состоянии checked */\n.style_flag_input__cWEan[type=\"radio\"]:checked + span:before {\n  border: 1px solid var(--blue);\n}\n\n/* серый border для переключателей в состоянии checked и disabled */\n.style_flag_input__cWEan[type=\"radio\"]:checked:disabled + span:before, \n.style_flag_input__cWEan[type=\"radio\"]:disabled + span:before {\n  opacity: 0.5;\n  border: 1px solid var(--checkbox-border-grey);  \n}\n\n/* оранжевый border для переключателей в состоянии checked в статусе isError */\n.style_flag_input_error__1nv-I[type=\"radio\"]:checked + span:before {\n  border: 1px solid var(--checkbox-orange);\n}\n\n/* стили для переключателей выбора */ \n.style_flag_input__cWEan[type=\"radio\"]:checked + span:after, \n.style_flag_input__cWEan[type=\"radio\"]:not(:checked) + span:after {\n  content: \"\";\n  position: absolute;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n  transition: all 0.2s ease;   \n  left: 4px;\n  top: 6px;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  background-color: var(--blue);\n}\n\n.style_flag_input_error__1nv-I[type=\"radio\"]:checked + span:after, \n.style_flag_input_error__1nv-I[type=\"radio\"]:not(:checked) + span:after {    \n  background-color: var(--checkbox-orange);\n}\n\n/* скрываем переключатели, когда элемент не выбран */\n.style_flag_input__cWEan[type=\"radio\"]:not(:checked) + span:after {\n  opacity: 0;\n}\n\n.style_flag_input__cWEan[type=\"radio\"]:checked + span:after {\n  opacity: 1;\n}\n\n/*************** button checkbox **************/\n.style_button_label__1eEjt {\n  position: relative;\n  display: flex;\n  background:var(--checkbox-label-background);\n  border: 1px solid var(--checkbox-button-border);\n  box-sizing: border-box;\n  border-radius: 2px 0px 0px 2px;\n  flex-direction: column;\n}\n\n.style_wrap__2imvz:first-child .style_button_span__34y8n {\n  border-radius: 2px 0 0 2px;\n}\n\n.style_wrap__2imvz:last-child .style_button_span__34y8n {\n  border-radius: 0 2px 2px 0;\n}\n\n.style_wrap__2imvz:first-child:last-child .style_button_span__34y8n {\n  border-radius: 2px;\n}\n\n.style_wrap__2imvz:first-child ~ .style_wrap__2imvz .style_button_span__34y8n {\n  margin-left: -1px;\n}\n\n.style_button_input__UbCUF:checked + .style_button_span__34y8n {\n  z-index: 1;\n}\n\n.style_button_span__34y8n {\n  position: relative;\n  display: flex;  \n  justify-content: center;  \n  width: 104px;\n  height: 100%; \n  line-height: 28px;\n  text-align: center;\n  vertical-align: middle;  \n  color:var(--button-checkbox-gray);  \n  box-sizing: border-box;\n  background: var(--button-checkbox-background-gray);\n  border: 1px solid var(--button-checkbox-border-gray);  \n}\n\n/* текст кнопки в состоянии disable */\n.style_button_span_disable__r9_LM {\n  opacity: 0.5;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 104px;\n  height: 100%; \n  line-height: 28px;\n  color: var(--disabled-text); \n  box-sizing: border-box;\n  background: var(--button-checkbox-background-gray);\n  border: 1px solid var(--button-checkbox-border-gray);  \n}\n\n.style_button_input__UbCUF {  \n  position: relative;\n  display: flex;\n  cursor: pointer;   \n}\n\n/* прячем стандартный элемент за область видимости */ \n.style_button_input__UbCUF[type=\"radio\"]:checked, \n.style_button_input__UbCUF[type=\"radio\"]:not(:checked) \n{\n  position: absolute;\n  opacity: 0; \n}\n\n.style_button_input__UbCUF[type=\"radio\"]:checked + span, \n.style_button_input__UbCUF[type=\"radio\"]:not(:checked) + span {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;  \n  line-height: 28px;\n  cursor: pointer;    \n}\n\n/* голубая кнопка в состоянии checked */\n.style_wrap__2imvz .style_button_input__UbCUF[type=\"radio\"]:checked + .style_button_span__34y8n { \n  color:var(--button-checkbox-blue);\n  background: var(--button-checkbox-background-blue);\n  border: 1px solid var(--button-checkbox-border-blue);\n  border-top: 2px solid var(--button-checkbox-border-top-blue);\n  line-height: 26px;\n}\n\n/* оранжевая кнопка в статусе isError */\n.style_wrap__2imvz .style_button_input_error__19WwP[type=\"radio\"] + .style_button_span__34y8n  {\n  color:var(--checkbox-orange);        \n  border: 1px solid var(--button-checkbox-border-gray); \n  background: var(--button-checkbox-background-gray);\n}\n\n/* оранжевая кнопка в состоянии checked и статусе is Error */\n.style_wrap__2imvz .style_button_input_error__19WwP[type=\"radio\"]:checked + .style_button_span__34y8n { \n  color:var(--checkbox-orange);\n  background: var(--button-checkbox-background-orange);\n  border: 1px solid var(--checkbox-orange);\n  border-top: 2px solid var(--checkbox-orange);\n  line-height: 26px;\n}\n\n.style_button_input__UbCUF[data-focus-visible-added] + span{\n  box-shadow: var(--focus-default-color) 0px 0px 0px 2px inset;\n}";
styleInject(css);

var _styleModuleImportMap = {
  "./style.css": {
    "label": "style_label__NWmwl",
    "span": "style_span__3Lz7i",
    "flag_span": "style_flag_span__30K5t",
    "flag_span_disable": "style_flag_span_disable__3oHKW",
    "flag_input": "style_flag_input__cWEan",
    "flag_input_error": "style_flag_input_error__1nv-I",
    "button_label": "style_button_label__1eEjt",
    "wrap": "style_wrap__2imvz",
    "button_span": "style_button_span__34y8n",
    "button_input": "style_button_input__UbCUF",
    "button_span_disable": "style_button_span_disable__r9_LM",
    "button_input_error": "style_button_input_error__19WwP"
  }
};

var RadioButton = function RadioButton(_ref) {
  var label = _ref.label,
      name = _ref.name,
      value = _ref.value,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      width = _ref.width,
      className = _ref.className,
      _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? 'F' : _ref$styleType,
      _ref$isDisable = _ref.isDisable,
      isDisable = _ref$isDisable === void 0 ? false : _ref$isDisable,
      _ref$isError = _ref.isError,
      isError = _ref$isError === void 0 ? false : _ref$isError,
      onChange = _ref.onChange;
  var sizes = {
    width: "".concat(width, "px")
  };
  var styleMap = new Map([['B', 'button'], ['F', 'flag']]);
  var inputStyle = "".concat(styleMap.get(styleType), "_input ") + (!isError ? "".concat(styleMap.get(styleType), "_input") : "".concat(styleMap.get(styleType), "_input_error"));
  var spanStyle = 'span ' + (!isDisable ? "".concat(styleMap.get(styleType), "_span") : "".concat(styleMap.get(styleType), "_span_disable"));

  var memoizedChange = function memoizedChange(event) {
    onChange(event.target.value, event);
  };

  return /*#__PURE__*/React.createElement("label", {
    className: (className ? className + " " : "") + "style_wrap__2imvz"
  }, /*#__PURE__*/React.createElement("input", {
    tabIndex: 0,
    type: 'radio',
    name: name,
    value: value,
    checked: checked,
    disabled: isDisable,
    onChange: memoizedChange,
    className: (className ? className + " " : "") + _getClassName(inputStyle, _styleModuleImportMap)
  }), /*#__PURE__*/React.createElement("span", {
    style: sizes,
    className: (className ? className + " " : "") + _getClassName(spanStyle, _styleModuleImportMap)
  }, label));
};

export { RadioButton };
