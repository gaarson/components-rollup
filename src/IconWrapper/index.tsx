import React from 'react';

import styles from './style.css';

interface IIconWrapper {
  children: React.FunctionComponentElement<{[key: string]: string}>;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export const IconWrapper = (
  { children, className, width, height, onClick }: IIconWrapper
): React.FunctionComponentElement<'div'> => {
  const sizes = { width: `${width}px`, height: `${height}px` };

  const iconStyle = { className: styles.icon };

  return (
    <div
      role="button"
      tabIndex={onClick ? 0 : undefined}
      style={sizes}
      styleName={`icon-wrapper ${onClick ? 'clickable' : ''}`}
      className={className}
      onClick={onClick}
      onKeyPress={onClick}
    >
      {
        React.cloneElement(
          children,
          !Object.keys(children.props)
            ? { ...sizes, ...iconStyle }
            : { ...iconStyle }
        )
      }
    </div>
  );
};
