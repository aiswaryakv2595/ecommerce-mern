import { Table } from 'antd';
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {EditFilled,DeleteFilled} from '@ant-design/icons'
import {getOrders} from '../features/auth/authSlice'

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];
 
const Orders = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getOrders())
  },[])
  const orderstate = useSelector(state=>state.auth.orders)
  console.log('orders',orderstate)
  const data1 = [];
  for (let i = 0; i < orderstate.length; i++) {
    data1.push({
      key: i + 1,
      name: orderstate[i].orderBy.firstname,
      product: orderstate[i].products.map((i) => (
        <>
        <ul>
          <li>{i.product.title}</li>
        </ul>
        </>
      ))
      
      
    });
  }
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