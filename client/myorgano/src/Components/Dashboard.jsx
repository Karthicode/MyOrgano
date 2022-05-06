import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../styles/dashboard.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { ReciepeSearchForm } from './ReciepeSeach';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';



  
  
export const Dashboard = () => {
  const { Header, Sider, Content } = Layout;
const [collapsedState,setCollapsed] = useState(false);

const toggle = () => {
  setCollapsed(!collapsedState);
};

  return (
  <Layout style={{height:'100vh'}}>
  <Sider trigger={null} collapsible collapsed={collapsedState}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'nav 1',
        },
        {
          key: '2',
          icon: <VideoCameraOutlined />,
          label: 'nav 2',
        },
        {
          key: '3',
          icon: <UploadOutlined />,
          label: 'nav 3',
        },
      ]}
    />
  </Sider>
  <Layout className="site-layout">
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsedState ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick:toggle  ,
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
      <ReciepeSearchForm/>
    </Content>
  </Layout>
</Layout>

);
  }
export default Dashboard;