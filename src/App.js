import React from 'react';
import './App.css';

import List from './components/List/index'
import director from './components/Director/index';
import product from "./components/Product/index";
import design from "./components/Design/index";
import front from "./components/Front/index";
import back from "./components/Back/index";

import { Route } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component{
render(){
  return(
    <div>
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          评分
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
        <p className="title">
          NCUHOME黑客马拉松评分后台
        </p>
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Route path='/home' component={List}></Route>
          <Route path='/director' component={director}></Route>
          <Route path='/design' component={design}></Route>
          <Route path='/product' component={product}></Route>
          <Route path='/front' component={front}></Route>
          <Route path='/back' component={back}></Route>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    </div>
  )

}
}

export default App;
