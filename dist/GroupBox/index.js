import { _ as _objectSpread2 } from '../chunks/_rollupPluginBabelHelpers-fe91c0c3.js';
import { _ as _getClassName } from '../chunks/getClassName-5e1d2a76.js';
import React from 'react';
import { s as styleInject } from '../chunks/style-inject.es-1d18fb65.js';
import { Checkbox } from 'Checkbox/index.js';
import { RadioButton } from 'RadioButton/index.js';

var css = "\n.style_groupbox__2mTjv {\n  display: flex;  \n}\n\n.style_flag_div__2k8hx {  \n  flex-direction: column;  \n}\n\n.style_button_div__2Rrg1 { \n  flex-direction: row;  \n}";
styleInject(css);

var _styleModuleImportMap = {
  "./style.css": {
    "groupbox": "style_groupbox__2mTjv",
    "flag_div": "style_flag_div__2k8hx",
    "button_div": "style_button_div__2Rrg1"
  }
};

var GroupBox = function GroupBox(_ref) {
  var groupName = _ref.groupName,
      data = _ref.data,
      className = _ref.className,
      styleName = _ref.styleName,
      _ref$styleType = _ref.styleType,
      styleType = _ref$styleType === void 0 ? 'F' : _ref$styleType,
      isCheckbox = _ref.isCheckbox,
      width = _ref.width,
      onChange = _ref.onChange;
  var groupWidth = {
    width: "".concat(width, "px")
  };
  var styleMap = new Map([['B', 'button'], ['F', 'flag']]);
  var divStyle = "".concat(styleMap.get(styleType), "_div ");

  var memoizedChange = function memoizedChange(value, event) {
    var tempValue = isCheckbox ? '' : event.target.value;
    var temp = data.map(function (item) {
      return _objectSpread2(_objectSpread2({}, item), {}, {
        label: item.label,
        value: item.value,
        checked: event.target.value === item.value ? event.target.checked : isCheckbox ? item.checked : false,
        isDisable: item.isDisable,
        isError: item.isError
      });
    });
    onChange(temp, tempValue, event);
  };

  return /*#__PURE__*/React.createElement("div", {
    style: groupWidth,
    className: (className ? className + " " : "") + _getClassName(styleName ? "groupbox ".concat(styleName, " ").concat(divStyle) : "groupbox ".concat(divStyle), _styleModuleImportMap)
  }, data.map(function (item) {
    var componentProps = {
      name: groupName,
      label: item.label,
      checked: item.checked,
      value: item.value,
      width: item.width,
      isDisable: item.isDisable,
      isError: item.isError,
      className: className,
      styleName: styleName,
      styleType: styleType,
      key: item.value,
      onChange: memoizedChange
    };

    if (isCheckbox) {
      return /*#__PURE__*/React.createElement(Checkbox, componentProps);
    } else {
      return /*#__PURE__*/React.createElement(RadioButton, componentProps);
    }
  }));
};
/***  Example of calling a GroupBox component ***
 * 
import React, { useState } from 'react';
import { GroupBox, ItemType } from '../GroupBox';

const TestGroupBox = ( 
): React.FunctionComponentElement<'div'> => {  

  const data: ItemType[] = [
    { 
      label: 'Checkbox 0',
      value: '0',
      width: 100,
      checked: false,
      isDisable: false,                   
      isError: false,
    },
    { 
      label: 'Checkbox 1',
      value: '1',
      width: 100,
      checked: false,
      isDisable: true,                   
      isError: false,
    },
    { 
      label: 'Checkbox 2',
      value: '2',
      width: 130,
      checked: false,
      isDisable: false,                   
      isError: false,
    },    
  ];

  const isCheckBox = true;

  const [result, setResultHook] = useState(data); 
  const [rbValue, setRbValueHook] = useState(''); 

  const onBtnChange = (result?: ItemType[], value?: string, event?: React.ChangeEvent<HTMLInputElement>): void => {         
    setResultHook(result);  
    setRbValueHook(value);     
  };

  return (
    <div>         
      <GroupBox 
        isCheckbox={isCheckBox}                               
        groupName={'Check'} 
        data={result} 
        styleType={'B'}
        width={300}                                                                       
        onChange={onBtnChange}
      />      
      <br/><br/>                        
    </div>
  );

};

export default TestGroupBox;
*/

export { GroupBox };
