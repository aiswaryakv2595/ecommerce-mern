import { Table } from 'antd';
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {EditFilled,DeleteFilled} from '@ant-design/icons'
import { getBlogs } from '../features/blog/blogSlice';


const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const Bloglist = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogs())
  },[])
  const blogState = useSelector(state=>state.blog.blogs)
  const data1 = [];
  for (let i = 0; i < blogState.length; i++) {
    data1.push({
      key: i + 1,
      name: blogState[i].title,
      category: blogState[i].category,
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
        <h3 className="mb-3">Blog List</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Bloglist