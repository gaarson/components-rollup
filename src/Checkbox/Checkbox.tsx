import React from 'react';

import './style.css';

interface ICheckbox {
  label?: string | number;
  name?: string;
  checked?: boolean;
  value?: string;
  width?: number;
  className?: string;
  styleName?: string;
  styleType?: 'B' | 'F'; /* B - button, F - flag: checkbox/radio */
  isDisable?: boolean;
  readOnly?: boolean;
  isError?: boolean;
  checkedColor?: 'blue' | 'gray';
  fontStyle?: 'normal' | 'italic';
  noCheckHoverBackground?: boolean;
  children?: React.ReactNode;
  onChange?: (
    value: boolean,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onClick?: (event) => void
}

const Checkbox = (
  {
    label,
    name,
    checked = false,
    value,
    width,
    className,
    styleName,
    styleType = 'F',
    isDisable = false,
    onChange,
    onClick,
    readOnly = false,
    isError = false,
    checkedColor = 'blue',
    fontStyle = 'normal',
    noCheckHoverBackground = false,
    children,
  }: ICheckbox
): React.FunctionComponentElement<'input'> => {
  
  const sizes = { width: `${width}px` };

  const styleMap = new Map([['B', 'button'], ['F', 'flag']]);
          
  // const inputStyle = `${styleMap.get(styleType)}_input ` +
  //   (!isError ?
  //     (styleType === 'B' ? `${styleMap.get(styleType)}_input` :
  //       (checkedColor === 'gray' ? `${styleMap.get(styleType)}_input_${checkedColor}` +
  //           (isDisable ? ` ${styleMap.get(styleType)}_input_white` : '')
  //         :
  //         `${styleMap.get(styleType)}_input`))
  //     :
  //     `${styleMap.get(styleType)}_input_error`);

  let inputStyle = `${styleMap.get(styleType)}_input `;
  if (isError) inputStyle = inputStyle + `${styleMap.get(styleType)}_input_error`;
  else {
    if (styleType === 'B') {
      inputStyle = inputStyle + `${styleMap.get(styleType)}_input`;
    }
    else if (styleType === 'F') {
      if (checkedColor === 'gray') {
        inputStyle = inputStyle + `${styleMap.get(styleType)}_input_${checkedColor}`;
        if (isDisable) inputStyle = inputStyle + ` ${styleMap.get(styleType)}_input_white`;
      }
      else if (noCheckHoverBackground) inputStyle = inputStyle + `${styleMap.get(styleType)}_input_no_background`;
      else inputStyle = inputStyle + `${styleMap.get(styleType)}_input`;
    }
  }

  const spanStyle = 'span ' +
    (!isDisable ?
      (noCheckHoverBackground) ? `${styleMap.get(styleType)}_span_no_background` : `${styleMap.get(styleType)}_span`
      :
      `${styleMap.get(styleType)}_span_disable`
    ) +
    (fontStyle === 'italic' ?
      ` ${styleMap.get(styleType)}_span_${fontStyle}`
      :
      ''
    );

  const memoizedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked, event);
  };

  return (
    <label
      id={`${name}-${value}`}
      data-checkbox
      className={className}
      styleName={styleName}
      htmlFor={readOnly ? 'nothing' : undefined}
    >
      <input
        type={'checkbox'}
        className={className}
        styleName={styleName ?
          `${styleName} ${inputStyle}`
          :
          `${inputStyle}`}
        name={name}
        value={value}
        checked={checked}
        disabled={isDisable}
        onChange={memoizedChange}
        onClick={onClick}
        readOnly={readOnly}
      />
      <span
        style={sizes}
        className={className}
        styleName={styleName ?
          `${styleName}  ${spanStyle}` :
          `${spanStyle}`}
      >
        {label || children}
      </span>
    </label>
  );
};

export default Checkbox;
