import React from 'react';

import './style.css';

interface IRadioButton {
  label?: string;
  name: string;
  value: string;
  checked?: boolean;
  width?: number;
  className?: string;
  styleName?: string;
  styleType?: 'B' | 'F'; /* B - button, F - flag: checkbox/radio */
  isDisable?: boolean;
  isError?: boolean;
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const RadioButton = (
  {
    label,
    name,
    value,
    checked = false,
    width,
    className,
    styleType = 'F',
    isDisable = false,
    isError = false,
    onChange,
  }: IRadioButton
): React.FunctionComponentElement<'input'> => {

  const sizes = { width: `${width}px` };

  const styleMap = new Map([['B', 'button'], ['F', 'flag']]);
          
  const inputStyle = `${styleMap.get(styleType)}_input ` +
    (!isError ?
      `${styleMap.get(styleType)}_input` :
      `${styleMap.get(styleType)}_input_error`);

  const spanStyle = 'span ' +
    (!isDisable ?
      `${styleMap.get(styleType)}_span` :
      `${styleMap.get(styleType)}_span_disable`);
  
  const memoizedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, event);
  };

  return (
    <label
      className={className}
      styleName="wrap"
    >
      <input
        tabIndex={0}
        type={'radio'}
        name={name}
        value={value}
        checked={checked}
        disabled={isDisable}
        className={className}
        styleName={inputStyle}
        onChange={memoizedChange}
      />
      <span
        style={sizes}
        className={className}
        styleName={spanStyle}
      >
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
