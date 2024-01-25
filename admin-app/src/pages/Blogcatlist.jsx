import { Table } from 'antd';
import React, { useEffect } from 'react'
import {EditFilled,DeleteFilled} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {getCategories} from '../features/bcategory/bcategorySlice'

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
 
const Blogcatlist = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  },[])
  const blogcatState = useSelector(state=>state.bCategory.bCategories)
  const data1 = [];
  for (let i = 0; i < blogcatState.length; i++) {
    data1.push({
      key: i+1,
      name: blogcatState[i].title,
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
    <h3 className="mb-3">Blog Category List</h3>
    <div>
    <Table columns={columns} dataSource={data1} />
    </div>
</div>
  )
}

export default Blogcatlist