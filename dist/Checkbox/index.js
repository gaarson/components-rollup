import { _ as _getClassName } from '../chunks/getClassName-5e1d2a76.js';
import React from 'react';
import { s as styleInject } from '../chunks/style-inject.es-1d18fb65.js';

var css = "/*************** checkbox **************/\n.style_label__2Zt9g {\n  position: relative;\n  display: flex;\n  align-items: center;  \n  height: 28px;\n  line-height: 28px; \n  text-align: center;\n  vertical-align: middle; \n}\n\n.style_span__2kA__ {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n}\n\n/*************** flag checkbox **************/\n\n.style_flag_span__fkxgt {\n  position: relative;\n  display: flex;\n  width: 130px;\n  height: 22px; \n  line-height: 22px;\n  left: 0px;       \n  color:var(--text); \n  margin-left: -2px;\n}\n\n.style_flag_span_disable__1eIfn {\n  position: relative;\n  display: flex;\n  opacity: 0.5;\n  color: var(--disabled-text);  \n}\n\n.style_flag_span_italic__2zqQn {\n  font-style: italic;\n}\n\n.style_flag_span__fkxgt:hover {\n  background: rgba(49, 116, 230, 0.1);\n  border-radius: 2px;\n}\n\n.style_flag_input__2CRL7 {\n  position: relative;\n  display: flex;\n  cursor: pointer;\n  background-color: var(--white);  \n  \n}\n\n.style_flag_input__2CRL7:hover {\n  background: var(--checkbox-label-background);\n  border-radius: 2px;\n}\n\n.style_flag_span_no_background__oMIVZ {\n  background: none;\n}\n\n\n/* убираем фон при flag_input_gray и hover */\n/* убираем фон при no_background и hover */\n.style_flag_input_gray__2Sbva:hover + .style_flag_span__fkxgt:hover,\n.style_flag_input_no_background__1VBMf:hover + .style_flag_span_no_background__oMIVZ:hover\n {\n  background: none;\n}\n\n\n/* прячем стандартный элемент за область видимости */\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked, \n.style_flag_input__2CRL7[type=\"checkbox\"]:not(:checked), \n.style_flag_input__2CRL7[type=\"checkbox\"]:checked, \n.style_flag_input__2CRL7[type=\"checkbox\"]:not(:checked) \n{\n  position: absolute;\n  opacity: 0;    \n}\n\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked + span, \n.style_flag_input__2CRL7[type=\"checkbox\"]:not(:checked) + span {\n  position: relative;\n  display: flex;\n  flex-direction: row;  \n  padding-left: 26px;\n  line-height: 22px;\n  cursor: pointer;    \n}\n\n/* стилизованные контейнеры для переключателей */\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked + span:before, \n.style_flag_input__2CRL7[type=\"checkbox\"]:not(:checked) + span:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 2px;\n  display: flex;\n  flex-direction: row;     \n  width: 16px;\n  height: 16px;    \n  border: 1px solid var(--checkbox-border-grey);\n  background-color: var(--white);   \n  border-radius: 2px; /* квадратный контейнер */\n  margin-left: 2px;\n}\n\n/* синий border для переключателей при наведении мыши */\n.style_flag_input__2CRL7[type=\"checkbox\"]:hover + span:before {\n  border: 1px solid var(--blue);\n}\n\n/* синий border для переключателей в состоянии checked */\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked + span:before {\n  border: 1px solid var(--blue);\n}\n\n/* серый border для переключателей в состоянии checked и disabled */\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked:disabled + span:before, \n.style_flag_input__2CRL7[type=\"checkbox\"]:disabled + span:before {\n  opacity: 0.5;\n  border: 1px solid var(--checkbox-border-grey);  \n}\n\n/* оранжевый border в статусе isError */\n.style_flag_input_error__2vjt_[type=\"checkbox\"]:checked + span:before, \n.style_flag_input_error__2vjt_[type=\"checkbox\"]:not(:checked) + span:before {        \n  border: 1px solid var(--checkbox-orange);    \n}\n\n/* оранжевый border для переключателей в состоянии checked в статусе isError */\n.style_flag_input_error__2vjt_[type=\"checkbox\"]:checked + span:before {\n  border: 1px solid var(--checkbox-orange);\n}\n\n/* синий фон для checkbox в состоянии checked */\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked + span:before {       \n  background-color: var(--blue);\n}\n\n/* серый фон для checkbox в состоянии checked */\n.style_flag_input_gray__2Sbva[type=\"checkbox\"]:checked + span:before {       \n  background-color: var(--checkbox-gray);\n  border: 1px solid var(--checkbox-border-grey);\n}\n\n/* серый фон для checkbox в состоянии checked и disabled */\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked:disabled + span:before, \n.style_flag_input__2CRL7[type=\"checkbox\"]:disabled + span:before{  \n  background-color: var(--checkbox-disabled-grey);\n}\n\n/* белый фон для checkbox в состоянии disabled */\n.style_flag_input_white__1rcLO[type=\"checkbox\"]:disabled + span:before{  \n  background-color: var(--white);\n}\n\n/* оранжевый фон для checkbox в статусе isError*/\n.style_flag_input_error__2vjt_[type=\"checkbox\"]:checked + span:before {       \n  background-color: var(--checkbox-orange);\n}\n\n/* стили для переключателей */\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked + span:after, \n.style_flag_input__2CRL7[type=\"checkbox\"]:not(:checked) + span:after {\n  content: \"\";\n  position: absolute;\n  -webkit-transition: all 0.2s ease;\n  -moz-transition: all 0.2s ease;\n  -o-transition: all 0.2s ease;\n  transition: all 0.2s ease;  \n  left: 3px;\n  top: 6px;\n  width: 10px;\n  height: 5px;\n  border-radius: 1px;\n  border-left: 2px solid var(--white);\n  border-bottom: 2px solid var(--white);\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  margin-left: 2px;\n}\n\n/* скрываем переключатели, когда элемент не выбран */\n.style_flag_input__2CRL7[type=\"checkbox\"]:not(:checked) + span:after {\n  opacity: 0;\n}\n\n.style_flag_input__2CRL7[type=\"checkbox\"]:checked + span:after {\n  opacity: 1;\n}\n\n/*************** button checkbox **************/\n\n.style_button_label__3Olqj {\n  position: relative;\n  display: flex;\n  background:var(--checkbox-label-background);\n  border: 1px solid var(--checkbox-button-border);\n  box-sizing: border-box;\n  border-radius: 2px 0px 0px 2px;\n  flex-direction: column;\n}\n\n.style_button_span__34Ta8 {\n  position: relative;\n  display: flex;  \n  justify-content: center;  \n  width: 104px;\n  height: 100%; \n  line-height: 28px;\n  text-align: center;\n  vertical-align: middle;\n  color:var(--button-checkbox-gray);  \n  box-sizing: border-box;\n  border-radius: 0px 2px 2px 0px; \n  background: var(--button-checkbox-background-gray);\n  border: 1px solid var(--button-checkbox-border-gray);  \n}\n\n/* текст кнопки в состоянии disable */\n.style_button_span_disable__31i29 {\n  opacity: 0.5;\n  position: relative;\n  display: flex;  \n  justify-content: center;\n  width: 104px;\n  height: 100%; \n  line-height: 28px;\n  color: var(--disabled-text); \n  box-sizing: border-box;\n  border-radius: 0px 2px 2px 0px; \n  background: var(--button-checkbox-background-gray);\n  border: 1px solid var(--button-checkbox-border-gray);  \n}\n\n.style_button_input__1HMfN {  \n  position: relative;\n  display: flex;\n  cursor: pointer;   \n}\n\n/* прячем стандартный элемент за область видимости */ \n.style_button_input__1HMfN[type=\"checkbox\"]:checked, \n.style_button_input__1HMfN[type=\"checkbox\"]:not(:checked) \n{\n  position: absolute;\n  opacity: 0; \n}\n\n.style_button_input__1HMfN[type=\"checkbox\"]:checked + span, \n.style_button_input__1HMfN[type=\"checkbox\"]:not(:checked) + span {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;    \n  line-height: 28px;\n  cursor: pointer;    \n}\n\n/* голубая кнопка в состоянии checked */\nlabel .style_button_input__1HMfN[type=\"checkbox\"]:checked + .style_button_span__34Ta8 { \n  color:var(--button-checkbox-blue);\n  background: var(--button-checkbox-background-blue);\n  border: 1px solid var(--button-checkbox-border-blue);\n  border-top: 2px solid var(--button-checkbox-border-top-blue);\n}\n\n/* оранжевая кнопка в статусе isError */\nlabel .style_button_input_error__32zzv[type=\"checkbox\"] + .style_button_span__34Ta8  {\n  color:var(--checkbox-orange);        \n  border: 1px solid var(--button-checkbox-border-gray); \n  background: var(--button-checkbox-background-gray);\n}\n\n/* оранжевая кнопка в состоянии checked и статусе is Error */\nlabel .style_button_input_error__32zzv[type=\"checkbox\"]:checked + .style_button_span__34Ta8 { \n  color:var(--checkbox-orange);\n  background: var(--button-checkbox-background-orange);\n  border: 1px solid var(--checkbox-orange);\n  border-top: 2px solid var(--checkbox-orange);\n  \n}\n";
styleInject(css);

var _styleModuleImportMap = {
  "./style.css": {
    "label": "style_label__2Zt9g",
    "span": "style_span__2kA__",
    "flag_span": "style_flag_span__fkxgt",
    "flag_span_disable": "style_flag_span_disable__1eIfn",
    "flag_span_italic": "style_flag_span_italic__2zqQn",
    "flag_input": "style_flag_input__2CRL7",
    "flag_span_no_background": "style_flag_span_no_background__oMIVZ",
    "flag_input_gray": "style_flag_input_gray__2Sbva",
    "flag_input_no_background": "style_flag_input_no_background__1VBMf",
    "flag_input_error": "style_flag_input_error__2vjt_",
    "flag_input_white": "style_flag_input_white__1rcLO",
    "button_label": "style_button_label__3Olqj",
    "button_span": "style_button_span__34Ta8",
    "button_span_disable": "style_button_span_disable__31i29",
    "button_input": "style_button_input__1HMfN",
    "button_input_error": "style_button_input_error__32zzv"
  }
};

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      name = _ref.name,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      value = _ref.value,
      width = _ref.width,
      className = _ref.className,
      styleName = _ref.styleName,
      _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? 'F' : _ref$styleType,
      _ref$isDisable = _ref.isDisable,
      isDisable = _ref$isDisable === void 0 ? false : _ref$isDisable,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$isError = _ref.isError,
      isError = _ref$isError === void 0 ? false : _ref$isError,
      _ref$checkedColor = _ref.checkedColor,
      checkedColor = _ref$checkedColor === void 0 ? 'blue' : _ref$checkedColor,
      _ref$fontStyle = _ref.fontStyle,
      fontStyle = _ref$fontStyle === void 0 ? 'normal' : _ref$fontStyle,
      _ref$noCheckHoverBack = _ref.noCheckHoverBackground,
      noCheckHoverBackground = _ref$noCheckHoverBack === void 0 ? false : _ref$noCheckHoverBack,
      children = _ref.children;
  var sizes = {
    width: "".concat(width, "px")
  };
  var styleMap = new Map([['B', 'button'], ['F', 'flag']]); // const inputStyle = `${styleMap.get(styleType)}_input ` +
  //   (!isError ?
  //     (styleType === 'B' ? `${styleMap.get(styleType)}_input` :
  //       (checkedColor === 'gray' ? `${styleMap.get(styleType)}_input_${checkedColor}` +
  //           (isDisable ? ` ${styleMap.get(styleType)}_input_white` : '')
  //         :
  //         `${styleMap.get(styleType)}_input`))
  //     :
  //     `${styleMap.get(styleType)}_input_error`);

  var inputStyle = "".concat(styleMap.get(styleType), "_input ");
  if (isError) inputStyle = inputStyle + "".concat(styleMap.get(styleType), "_input_error");else {
    if (styleType === 'B') {
      inputStyle = inputStyle + "".concat(styleMap.get(styleType), "_input");
    } else if (styleType === 'F') {
      if (checkedColor === 'gray') {
        inputStyle = inputStyle + "".concat(styleMap.get(styleType), "_input_").concat(checkedColor);
        if (isDisable) inputStyle = inputStyle + " ".concat(styleMap.get(styleType), "_input_white");
      } else if (noCheckHoverBackground) inputStyle = inputStyle + "".concat(styleMap.get(styleType), "_input_no_background");else inputStyle = inputStyle + "".concat(styleMap.get(styleType), "_input");
    }
  }
  var spanStyle = 'span ' + (!isDisable ? noCheckHoverBackground ? "".concat(styleMap.get(styleType), "_span_no_background") : "".concat(styleMap.get(styleType), "_span") : "".concat(styleMap.get(styleType), "_span_disable")) + (fontStyle === 'italic' ? " ".concat(styleMap.get(styleType), "_span_").concat(fontStyle) : '');

  var memoizedChange = function memoizedChange(event) {
    onChange(event.target.checked, event);
  };

  return /*#__PURE__*/React.createElement("label", {
    id: "".concat(name, "-").concat(value),
    "data-checkbox": true,
    htmlFor: readOnly ? 'nothing' : undefined,
    className: (className ? className + " " : "") + _getClassName(styleName, _styleModuleImportMap)
  }, /*#__PURE__*/React.createElement("input", {
    type: 'checkbox',
    name: name,
    value: value,
    checked: checked,
    disabled: isDisable,
    onChange: memoizedChange,
    onClick: onClick,
    readOnly: readOnly,
    className: (className ? className + " " : "") + _getClassName(styleName ? "".concat(styleName, " ").concat(inputStyle) : "".concat(inputStyle), _styleModuleImportMap)
  }), /*#__PURE__*/React.createElement("span", {
    style: sizes,
    className: (className ? className + " " : "") + _getClassName(styleName ? "".concat(styleName, "  ").concat(spanStyle) : "".concat(spanStyle), _styleModuleImportMap)
  }, label || children));
};

export { Checkbox };
