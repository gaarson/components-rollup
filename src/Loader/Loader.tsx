import React from 'react';

import './style.css';

interface Props {
  width?: number | string
  height?: number | string
  color?: string
  className?: string
  styleName?: string
  style?: {[key: string]: string}
}
const Loader = (
  {
    width = 25,
    height= 25,
    color = '#2F80ED',
    className,
    style
  }: Props
): React.FunctionComponentElement<'div'> => {

  console.log('puk');
  
  const loaderStyle = {
    ...style,
    width,
    height
  };

  return (
    <div styleName="loader" style={loaderStyle} className={className}>
      <svg
        width={width}
        height={height}
        styleName="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="21.904 21.904 43.809 43.809"
        stroke={color}
        style={{transform: 'rotate(0deg)'}}>
        <circle
          cx="43.809"
          cy="43.809"
          r="20"
          strokeWidth="3.809"
          strokeDasharray="125.664"
          strokeDashoffset="125.663px"
          styleName="loader__overlay">
        </circle>
      </svg>
    </div>
  );
};

export default Loader;
