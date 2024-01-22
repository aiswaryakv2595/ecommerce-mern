import { Table } from 'antd';
import React from 'react'

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
const Orders = () => {
  return (
    <div>
    <h3 className="mb-3">Orders</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Orders