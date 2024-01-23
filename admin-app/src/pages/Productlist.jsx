import { Table } from 'antd';
import React from 'react'
// import {EditFilled,DeleteFilled} from '@ant-design/icons'
const columns = [
    {
      title: 'SNo',
      dataIndex: 'sno',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      sno:`PDT-${i+1}`,
      name: `Edward King ${i+1}`,
      product: `Product ${i}`,
      status: `Placed`,
    });
  }
const Productlist = () => {
  return (
    <div>
    <h3 className="mb-3">Product List</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Productlist