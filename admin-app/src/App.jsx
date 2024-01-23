import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Resetpassword from './pages/Resetpassword'
import Forgotpassword from './pages/Forgotpassword'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Enquiries from './pages/Enquiries'
import Bloglist from './pages/Bloglist'
import Blogcatlist from './pages/Blogcatlist'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Colorlist from './pages/Colorlist'
import Categorylist from './pages/Categorylist'
import Brandlist from './pages/Brandlist'
import Productlist from './pages/Productlist'
import AddBlog from './pages/AddBlog'
import AddBlogcat from './pages/AddBlogcat'
import AddColor from './pages/AddColor'
import AddCategory from './pages/AddCategory'
import AddBrand from './pages/AddBrand'
import AddProduct from './pages/AddProduct'
function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/reset-password' element={<Resetpassword/>}/>
        <Route path='/forgot-password' element={<Forgotpassword/>}/>
        <Route path='/reset-password' element={<Resetpassword/>}/>
        <Route path='/admin' element={<MainLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='blog-category-list' element={<Blogcatlist />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color-list' element={<Colorlist />} />
          <Route path='category-list' element={<Categorylist />} />
          <Route path='brand-list' element={<Brandlist />} />
          <Route path='brand' element={<AddBrand />} />
          <Route path='product-list' element={<Productlist />} />
          <Route path='product' element={<AddProduct />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog-category' element={<AddBlogcat />} />
          <Route path='color' element={<AddColor />} />
          <Route path='category' element={<AddCategory />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
