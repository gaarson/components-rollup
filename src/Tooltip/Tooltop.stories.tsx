import React from 'react';

import { Tooltip } from 'Tooltip/index.js';

export default {
  title: 'Tooltip'
}

export const Simple = () => {
  return (
    <Tooltip 
      text={
        <p>
          Изменено менеджером
          <span>02 фев, 10:11</span>
        </p>
      }
    >
      <div style={{display: 'inline-block'}}>Tooltip</div>
    </Tooltip>
  );
}
