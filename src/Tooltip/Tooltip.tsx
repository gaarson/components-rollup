import React, { useState, useRef } from 'react';

import Icon from '../../assets/ic_eye.svg';

import './style.css';

const textContent = (elem: React.ReactElement | string): string => {
  if (!elem) {
    return '';
  }
  if (typeof elem === 'string') {
    return elem;
  }
  const children = elem.props && elem.props.children;
  if (children instanceof Array) {
    return children.map(textContent).join('');
  }
  return textContent(children);
};

export interface ITooltip {
    children: React.ReactElement;
    text: string | React.ReactElement;
    position?: 'top' | 'bottom' | 'left' | 'right';
    width?: number;
    className?: string;
    styleName?: string;
    disabled?: boolean
  }

const Tooltip = (
  {
    children,
    text,
    position = 'top',
    width = 300,
    className,
    disabled = false
  }: ITooltip
): React.FunctionComponentElement<'div'> => {
  const [showTooltipHook, setShowTooltipHook] = useState(false);
  const [tooltipTopHook, setTooltipTopHook] = useState(0);
  const [tooltipLeftHook, setTooltipLeftHook] = useState(0);
  const childrenRef = useRef(null);

  const GetTooltipCoordinates = () => {
    let tooltipLeft = 0;
    let tooltipTop = 0;

    function getTooltipWidth(): number {
      let result = width;
      if (text) {
        result = Math.min(width, Math.ceil( textContent(text).length * 6.3 + 20));
      }
      return result;
    }

    function getToolTipHeight(): number {
      let result = 24;
      const charsInLine = Math.floor((width - 20) / 6.3);
      const lineHeight = 14;
      if ((text) && (textContent(text).length > charsInLine)) {
        result = Math.ceil((textContent(text).length / charsInLine))*lineHeight + 10;
      }
      return result;
    }

    const childCoords = childrenRef.current.getBoundingClientRect();

    tooltipLeft = childCoords.left + childCoords.width - getTooltipWidth();
    if (tooltipLeft < 0) tooltipLeft = 0; // не заезжать за левый край окна

    tooltipTop = childCoords.top - getToolTipHeight() - 10;
    if (tooltipTop < 0) { // если подсказка не помещается сверху, то отображать её снизу
      tooltipTop = childCoords.top + childCoords.height + 10;
    }

    switch (position) {
    case 'bottom': {
      tooltipTop = childCoords.top + childCoords.height + 10;
      if ((tooltipTop+getToolTipHeight())>childrenRef.current.ownerDocument.body.clientHeight) {
        // Если не помещается снизу, отображаем сверху
        tooltipTop = childCoords.top - getToolTipHeight() - 10;
      }
      break;
    }
    case 'left': {
      tooltipTop = childCoords.top;
      tooltipLeft = childCoords.left - getTooltipWidth() - 10;
      // Если не помещается слева, отображаем справа
      if (tooltipLeft<0) {
        tooltipLeft = childCoords.left + childCoords.width + 10;
      }
      break;
    }
    case 'right': {
      tooltipTop = childCoords.top;
      tooltipLeft = childCoords.left + childCoords.width + 10;
      // Если не помещается справа, отображаем слева
      if ( (tooltipLeft + getTooltipWidth() + 10) > childrenRef.current.ownerDocument.body.clientWidth) {
        tooltipLeft = childCoords.left - getTooltipWidth() - 10;
      }
      break;
    }
    default: break;
    }

    setTooltipLeftHook(Math.ceil(tooltipLeft));
    setTooltipTopHook(Math.ceil(tooltipTop));
  };

  const showTooltip = () => {
    GetTooltipCoordinates();
    setShowTooltipHook(true);
  };

  const hideTooltip = () => {
    setShowTooltipHook(false);
  };

  const childrenProps = { ref: childrenRef, onMouseOver: showTooltip, onMouseOut: hideTooltip };

  console.log(Icon());

  return (
    <>
      <div dangerouslySetInnerHTML={{__html: Icon().outerHTML}}></div>
      {
        React.cloneElement(
          children,
          { ...childrenProps}
        )
      }
      { showTooltipHook && text && !disabled
        ?
        <div 
          data-tooltip 
          styleName="tooltip" 
          style={{left: tooltipLeftHook, top: tooltipTopHook, width}} 
          className={ className }
        >
          "ЖОАПА"
          {text}
        </div>
        : ''
      }
    </>
  );
};

export default Tooltip;

/********  Example of calling a Tooltip component
 *
 * // Можно обернуть DOM-узлы или React-классовые компоненты.
 * // Функциональные компоненты сразу обернуть нельзя, сначала в DOM узел
 *
 * import { Tooltip } from 'view/shared/Tooltip';
 *
 * <Tooltip text='Всплывающая подсказка' position='top'>
 *   <span>
 *    <IconWrapper >
 *      <FWDIcon {...iconSize}/>
 *    </IconWrapper> *
 *   </span>
 * </Tooltip>
 *
 * */
