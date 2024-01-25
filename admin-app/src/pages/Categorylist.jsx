import { Table } from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import React, { useEffect } from 'react'
import { getProductCategories } from '../features/pcategory/pcategorySlice';
import {EditFilled,DeleteFilled} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  
const Categorylist = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductCategories())
  },[])
  const categoryState = useSelector((state)=>state.pCategory.pCategories)
  const data1 = [];
  for (let i = 0; i < categoryState.length; i++) {
    data1.push({
      key: i+1,
      name: categoryState[i].title,
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
  console.log(categoryState)
  return (
    <div>
    <h3 className="mb-3">Category List</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Categorylist