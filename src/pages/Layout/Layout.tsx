import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import'./layout.less'

const promissionRouteList = useRoutes(
  routes:[
    {
      caseSensitive:true,

    }
  ]
)


const { Header, Sider, Content } = Layout;

const LayoutContainer: React.FC =  () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null}  collapsible collapsed={collapsed}>
        <div className="logo">
          ComonApi11111
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '用户列表',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '分组列表',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '信息列表',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: `trigger`,
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer