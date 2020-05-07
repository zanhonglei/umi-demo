import React from 'react';
import { connect } from 'umi';
import DataTable from '@/components/datatable';
import { Button, Popconfirm } from 'antd';

@connect(({ user }) => ({ user }))
class User extends React.Component {
  search = () => {
    let req = '';
    let { dispatch } = this.props;
    dispatch({
      type: 'user/getUserListPage',
      payload: req,
    });
  };

  deleteById = () => {};

  render() {
    console.log(this.props);
    const { user } = this.props;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '操作',
        render: (text, record) => {
          return (
            <Popconfirm
              title="delete?"
              onConfirm={() => this.deleteById(record.id)}
            >
              <Button>删除</Button>
            </Popconfirm>
          );
        },
      },
    ];
    return (
      <div>
        <DataTable columns={columns} dataSource={user.data} rowKey="id" />
      </div>
    );
  }
}

export default User;
