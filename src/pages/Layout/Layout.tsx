import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./layout.less";

const { Header, Sider, Content } = Layout;

const CustomBread: React.FC<{ breadList: string[] }> = (props: {
  breadList: string[];
}) => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <HomeOutlined />
      </Breadcrumb.Item>
      {props.breadList.map((breadItem) => (
        <Breadcrumb.Item href=""> {breadItem} </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  </>
);

const LayoutContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumbList, setBreadcrumbList] = useState<string[]>([]);
  const href = useLocation();
  const navigate = useNavigate();
  // breadcrumbFactory()
  useEffect(() => {
    const result = href.pathname.split("/");
    console.log(result);
    result.shift();
    // result.splice(0, 2);
    setBreadcrumbList(result);
  }, [href]);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) navigate("/login");
  });
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">ComonApi11111</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "用户列表",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "分组列表",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "信息列表",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: `trigger`,
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <CustomBread breadList={breadcrumbList} />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
