import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  DashboardOutlined,
  UserAddOutlined,
  UnorderedListOutlined,
  BgColorsOutlined,
  FontColorsOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { SiBrandfolder } from "react-icons/si";
import { RiListCheck3 } from "react-icons/ri";
import { LuClipboardList } from "react-icons/lu";
import { BiCategory, BiCategoryAlt } from "react-icons/bi";
import { FaBlog, FaMicroblog } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { ImBlog, ImBlogger2 } from "react-icons/im";
import { Layout, Menu, Button, theme } from "antd";
import { IoIosNotifications } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-1 mb-0">
            <span className="sm-logo">DT</span>
            <span className="lg-logo">DigiTech</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key != "signout") {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <DashboardOutlined className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <UserAddOutlined className="fs-4" />,
              label: "Customers",
            },
            {
              key: "catalog",
              icon: <ShoppingCartOutlined className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <ShoppingCartOutlined className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <UnorderedListOutlined className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <RiListCheck3 className="fs-4" />,
                  label: "Brand List",
                },
                {
                  key: "category",
                  icon: <BiCategory className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <BgColorsOutlined className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <FontColorsOutlined className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <LuClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "blogs",
              icon: <ImBlog className="fs-4" />,
              label: "Blog",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <ImBlogger2 className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <FaMicroblog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBlog className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <MdConnectWithoutContact className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5 align-items-center"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img
                  width={32}
                  height={32}
                  src="data:image/jpeg;base64,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"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <h5 className="mb-0">AiswaryaKV</h5>
                <p className="mb-0">aisasjdn@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
