import React from 'react';

import { Table, Row, Head } from 'Table/index.js';

export default {
  title: 'Table',
}

export const Primary = () => {
  return (
    <Table
      cols={[]}
      data={[
        { id: 1, some: 'some', sosome: 'sosome' },
        { id: 2, some: 'some', sosome: 'sosome' }
      ]}
    >
      <Head 
        render={() => (
          <React.Fragment>
            <th>some</th>
            <th>sosome</th>
          </React.Fragment>
        )}
      />
      <Row<{ id: number, sosome: string, some: string }>
        render={({ sosome, some }) => (
          <React.Fragment>
            <td>{sosome}</td>
            <td>{some}</td>
          </React.Fragment>
        )}
      />
    </Table>
  );
};
