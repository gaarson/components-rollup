import React, { useState, useRef, useEffect } from 'react';
import { Loader } from 'Loader/index.js';
import { Scrollbars } from 'react-custom-scrollbars-2';

import Head from './Head';
import Row from './Row';
import Foot from './Foot';

import './style.css';

type component = React.FunctionComponentElement<typeof Row | typeof Head | typeof Foot>;

interface ITable<T> {
  scroll?: number,
  onScroll?: (pos: number) => void,
  children: component[] | component,
  data: T[],
  cols: number[],
  wraps?: number[],
  className?: string,
  styleName?: string,
  style?: {[key: string]: string},
  pending?: boolean,
  noDataText?: string,
  customScrollBar?: boolean,
  fieldsSize?: number,
  headerStyleName?: string,
  bodyStyleName?: string,
}

const Table = <T extends { id?: number }>({
  children,
  data,
  cols,
  className,
  style,
  pending = false,
  wraps,
  noDataText = 'Нет данных',
  customScrollBar = false,
  fieldsSize = undefined,
  headerStyleName,
  bodyStyleName
}: ITable<T>): React.FunctionComponentElement<'div'> => {
  const [isAllWrapped, setAllWrapped] = useState(false);
  const tableBodyRef: { current: null | HTMLDivElement } = useRef();
  const tableHeadRef: { current: null | HTMLDivElement } = useRef();
  const tableFootRef: { current: null | HTMLDivElement } = useRef();

  useEffect(() => {
    if (tableBodyRef && tableHeadRef && tableFootRef &&
      fieldsSize !== undefined && fieldsSize > 0) {
      const tableBodyRefStyle = tableBodyRef.current.style;
      const tableHeadRefStyle = tableHeadRef.current.style;
      const tableFootRefStyle = tableFootRef.current.style;
      tableBodyRefStyle.minWidth = `${fieldsSize}px`;
      tableBodyRefStyle.overflow = 'unset';
      tableHeadRefStyle.minWidth = `${fieldsSize}px`;
      tableFootRefStyle.minWidth = `${fieldsSize}px`;
    }
  }, [tableBodyRef, tableHeadRef, tableFootRef, fieldsSize]);

  const toggleWrapAll = (): void => {
    setAllWrapped(!isAllWrapped);
  };
  const Colgroup = () => (
    <colgroup>
      {cols.map((value, index) => (
        <col key={index} width={`${value}%`} />
      ))}
    </colgroup>
  );

  const head = Array.isArray(children) ? children[0] : children;
  const body = children[1] || null;
  const foot = children[2] || null;

  console.log('XJNASsciw:sss  sfsafsfsFaasdsad');

  return (
    <div className={className} style={style} styleName="table">
      <div styleName="table-header" className={headerStyleName} ref={tableHeadRef}>
        <table>
          <Colgroup />
          <thead>
            {{
              ...head,
              props: {
                ...head.props,
                isAllWrapped,
                toggleWrapAll,
                data,
              },
            }}
          </thead>
        </table>
      </div>
      <div styleName={`table-body ${pending ? 'table-body__loading' : ''}`} className={bodyStyleName} ref={tableBodyRef}>
        {
          customScrollBar ?
            <Scrollbars
              autoHeight
              autoHeightMax={390}
              renderTrackHorizontal={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}>
              <table>
                <Colgroup />
                <tbody>
                  {data && data.length !== 0
                    ? data.map((info, index) => (
                      {
                        ...body,
                        key: info.id,
                        props: {
                          ...body.props,
                          isAllWrapped,
                          wraps,
                          arr: info[Object.keys(info).find(
                            key => Array.isArray(info[key]) && info[key],
                          )],
                          info,
                          index
                        },
                      }
                    )) : null
                  }
                </tbody>
              </table>
            </Scrollbars>
            :
            <table>
              <Colgroup />
              <tbody>
                {data && data.length !== 0
                  ? data.map((info, index) => (
                    {
                      ...body,
                      key: info.id,
                      props: {
                        ...body.props,
                        isAllWrapped,
                        wraps,
                        arr: info[Object.keys(info).find(
                          key => Array.isArray(info[key]) && info[key],
                        )],
                        info,
                        index
                      },
                    }
                  )) : null
                }
              </tbody>
            </table>
        }
        {
          pending
            ? <div styleName="loader-overlay"><Loader/></div>
            : data && data.length === 0 &&
              <div styleName="placeholder">
                { noDataText && <span>{noDataText}</span> }
              </div>
        }
      </div>
      <div styleName="table-footer" ref={tableFootRef}>
        <table>
          <Colgroup />
          {
            foot &&
            <tfoot>
              {{
                ...foot,
                props: {
                  ...foot.props,
                  isAllWrapped,
                  toggleWrapAll,
                  data,
                },
              }}
            </tfoot>
          }
        </table>
      </div>
    </div>
  );
};

export default Table;

