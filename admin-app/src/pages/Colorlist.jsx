import { Table } from 'antd';
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {EditFilled,DeleteFilled} from '@ant-design/icons'
import { getColors } from '../features/color/colorSlice';

const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
   
  ];
  
const Colorlist = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getColors())
  },[])
  const colorState = useSelector((state)=>state.color.colors)
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i+1,
      name: colorState[i].title,
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <EditFilled />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <DeleteFilled />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
    <h3 className="mb-3">Color List</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Colorlist
