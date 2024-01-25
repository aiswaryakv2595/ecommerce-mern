import { Table } from 'antd';
import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import {EditFilled,DeleteFilled} from '@ant-design/icons'
import { getEnquiries } from '../features/enquiry/enquirySlice';

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
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Status",
    dataIndex: "status",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];
 
const Enquiries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEnquiries())
  },[])
  const enquiryState = useSelector(state => state.enquiry.enquiries)
  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      mobile: enquiryState[i].mobile,
      comment: enquiryState[i].comment,
      status: (
        <>
          <select
            name=""
            defaultValue={enquiryState[i].status ? enquiryState[i].status : "Submitted"}
            className="form-control form-select"
            id=""
           
          >
            <option value="Submitted">Submitted</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </>
      ),

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
        <h3 className="mb-3">Enquiries</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Enquiries
