import React from 'react';

import './style.css';

import { Checkbox } from 'Checkbox/index.js';
import { RadioButton } from 'RadioButton/index.js';

type ItemType = {
  label?: string;
  value?: string;
  width?: number;
  checked?: boolean;
  isDisable?: boolean;
  isError?: boolean;
};

interface IGroupBox {
  groupName?: string;
  data: ItemType[];
  className?: string;
  styleName?: string;
  styleType?: 'B' | 'F'; /* B - button, F - flag: checkbox/radio */
  isCheckbox: boolean;
  width?: number;
  onChange: (
    result?: ItemType[],
    value?: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  }

const GroupBox = (
  {
    groupName,
    data,
    className,
    styleName,
    styleType = 'F',
    isCheckbox,
    width,
    onChange,
  }: IGroupBox
): React.FunctionComponentElement<'ul'> => {
  
  const groupWidth = { width: `${width}px` };

  const styleMap = new Map([['B', 'button'], ['F', 'flag']]);

  const divStyle = `${styleMap.get(styleType)}_div `;

  const memoizedChange = (value: string | boolean, event: React.ChangeEvent<HTMLInputElement>) => {
    const tempValue = (isCheckbox) ? '' : event.target.value;
    const temp = data.map((item: ItemType) => {
      return {
        ...item,
        label: item.label,
        value: item.value,
        checked: (event.target.value === item.value) ?
          event.target.checked
          :
          (isCheckbox ? item.checked : false),
        isDisable: item.isDisable,
        isError: item.isError,
      };
    });
    onChange(temp, tempValue, event);
  };

  return (
    <div
      className={className}
      styleName={styleName ?
        `groupbox ${styleName} ${divStyle}`
        :
        `groupbox ${divStyle}`}
      style={groupWidth}
    >
      {
        data.map((item) => {
          const componentProps = {
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
            onChange: memoizedChange,
          };
          if (isCheckbox) {
            return (<Checkbox {...componentProps} />);
          }
          else {
            return (<RadioButton {...componentProps} />);
          }
        })
      }
    </div>
  );
};

export default GroupBox;

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
