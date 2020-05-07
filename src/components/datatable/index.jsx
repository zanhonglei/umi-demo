import React from 'react';
import { Table } from 'antd';

class DataTable extends React.Component {
  render() {
    const { columns, dataSource, rowKey } = this.props;
    return (
      <div>
        <Table columns={columns} dataSource={dataSource} rowKey={rowKey} />
      </div>
    );
  }
}

export default DataTable;
