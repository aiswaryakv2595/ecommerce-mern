import { Table } from 'antd';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../features/product/productSlice';
import {Link} from 'react-router-dom'
import {EditFilled,DeleteFilled} from '@ant-design/icons'
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title:"Action",
    dataIndex:"action"
  }
  
];
  
const Productlist = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productstate = useSelector((state) => state.product.products);
 
  const data1 = [];
  for (let i = 0; i < productstate.length; i++) {
    data1.push({
      key: i + 1,
      title: productstate[i].title,
      brand: productstate[i].brand,
      category: productstate[i].category,
      color: productstate[i].color,
      price: `${productstate[i].price}`,
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
  console.log(data1)
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