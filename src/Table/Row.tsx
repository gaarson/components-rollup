import React, { useEffect, useState } from 'react';

interface IRow<T>{
  render: (
    data: T,
    num: number,
    wrapAll?: (isAllWrapped: boolean) => void,
    isAll?: number,
    isWrap?: boolean,
  ) => React.ReactNode,
  arr?: Array<{[key: string]: string | number | Array<any>}>,
  info?: T,
  index?: number,
  children?: React.FunctionComponentElement<typeof React.Fragment>,
  style?: {[key: string]: string},
  isAllWrapped?: boolean,
  wraps?: number[],
  mapIndex?: number,
  className?: string,
  wrapped?: boolean,
  skip?: boolean,
  custom?: boolean,
  styleName?: string,
}

const Row = <T extends { id: number }>({
  info,
  index,
  arr,
  children,
  render,
  wrapped,
  isAllWrapped,
  style = {},
  className,
  mapIndex,
  skip,
  wraps = [],
  custom,
}: IRow<T>): React.FunctionComponentElement<''> => {
  const [isWrap, setIsWrap] = useState(isAllWrapped);
  const wrapFunc = (isAllWrapped) => {
    if (typeof isAllWrapped === 'boolean') {
      setIsWrap(!isAllWrapped);
    } else {
      setIsWrap(!isWrap);
    }
  };

  useEffect(() => {
    const wrap = info ? wraps.includes(info.id) : null;

    setIsWrap(isAllWrapped || wrap || !wrapped || null);
  }, []);

  useEffect(() => {
    wrapFunc(isAllWrapped);
  }, [isAllWrapped]);

  return (
    <React.Fragment>
      {skip && null}
      {!skip && (
        custom ? render(info, index, wrapped !== undefined && wrapFunc, mapIndex, isWrap) : (
          <tr className={className} style={{ ...style }}>
            {render(info, index, wrapped !== undefined && wrapFunc, mapIndex, isWrap)}
          </tr>
        )
      )}
      {
        children && (isWrap) && arr.map((item, index) =>
          ({
            ...children,
            props: {
              ...children.props,
              key: item.id,
              isAllWrapped,
              wraps,
              mapIndex: index,
              wrapped: !isWrap,
              arr: item[Object.keys(item).find(key => Array.isArray(item[key]) && item[key])],
              info: skip ? { ...item, ...info, parentRowInfo: info } : { ...item, parentRowInfo: info },
            }
          })
        )
      }
    </React.Fragment>
  );
};

export default Row;

