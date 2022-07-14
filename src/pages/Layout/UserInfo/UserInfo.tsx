import {  Table, Button ,Tag   } from 'antd';

import { ColumnsType } from 'antd/lib/table';
import { useState } from 'react';
import UserForm from './components/UserForm/UsefForm';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '6',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns: ColumnsType<DataType> =  [
  {
    title:'Name',
    dataIndex:'name',
    key:'name',
    align:'center',
    render: text => <a> {text}</a>,
    width: 300,
  },
  {
    title:'age',
    dataIndex:'age',
    key:'age',
    align:'center',
  },
  {
    title:'Address',
    dataIndex:'address',
    key:'address',
    align:'center',
  },
  {
    title:'Tags',
    dataIndex:'tags',
    key:'tags',
    align:'center',
    render:(_, {tags}) => (
      <>
        {tags.map(tag => {
           let color = tag.length > 5 ? 'geekblue' : 'green';
           if (tag === 'loser') {
             color = 'volcano';
           }
           return (
             <Tag color={color} key={tag}>
               {tag.toUpperCase()}
             </Tag>
           );
        })}
      </>
    )
  },
  {
    title:'Action',
    dataIndex:'action',
    key:'action',
    align:'center',
  },
]

const UserInfo = () => {
  const [createUserVisible,setCreateUserVisible] = useState(false)
  return(
    <div className="UserInfo h-full w-full bg-pink-300 box-sizing py-30px px-20px">
        <div className='w-full h-auto flex justify-end items-center mb-15px'>
          <Button
          onClick={() =>setCreateUserVisible(true) }
          type="primary"  className='w-150px' children={['Create']}/>
          <UserForm  isModalVisible={createUserVisible}
          handleOk = {() =>setCreateUserVisible(false)}
          handleCancel = { () => setCreateUserVisible(false)}
          ></UserForm>
        </div>
        <Table  bordered  columns={columns} dataSource={data}  pagination={{pageSize:5,total:data.length}} />
    </div>
  )}


export default UserInfo