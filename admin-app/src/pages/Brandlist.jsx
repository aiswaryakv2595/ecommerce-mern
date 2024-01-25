import { Table } from 'antd';
import React, { useEffect } from 'react'
import { getBrands } from '../features/brand/brandSlice';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {EditFilled,DeleteFilled} from '@ant-design/icons'
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
  ];
  
const Brandlist = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getBrands())
  },[])
  const brandState = useSelector((state)=>state.brand.brands)
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i,
      name:brandState[i].title,
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
    <h3 className="mb-3">Brand List</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Brandlist