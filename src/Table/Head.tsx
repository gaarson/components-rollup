import React from 'react';

interface IHead {
  data?: Array<{[key: string]: string | number | Array<any>}>;
  children?: React.FunctionComponentElement<typeof React.Fragment>;
  render: (data: any, toggleWrapAll: () => void, isAllWrapped: boolean) => any;
  isAllWrapped?: boolean;
  toggleWrapAll?: () => void;
  className?: string;
  styleName?: string;
  style?: {[key: string]: string};
}

const Head = ({
  data,
  render,
  children,
  isAllWrapped,
  toggleWrapAll,
  style = {},
  className,
}: IHead) => (
  <React.Fragment>
    <tr className={className} style={{ ...style }}>
      {render(data, toggleWrapAll, isAllWrapped)}
    </tr>
    {children
      && {
        ...children,
        props: {
          ...children.props,
          toggleWrapAll,
          data,
        },
      }
    }
  </React.Fragment>
);

export default Head;

