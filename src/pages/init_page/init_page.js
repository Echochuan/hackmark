import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const {SubMenu} = Menu;

export default class init_page extends Component {
  render() {
    return (
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <SubMenu key="di" icon={<UserOutlined />} title="运营组">
              <Menu.Item key="1" >
                第一组
              </Menu.Item>
              <Menu.Item key="2" >
                第二组
              </Menu.Item>
              <Menu.Item key="3" >
                第三组
              </Menu.Item>
              <Menu.Item key="4" >
                第四组
              </Menu.Item>
              <Menu.Item key="5" >
                第五组
              </Menu.Item>
              <Menu.Item key="6" >
                第六组
              </Menu.Item>
              <Menu.Item key="7" >
                第七组
              </Menu.Item>
            </SubMenu>
            <SubMenu key="pm" icon={<UserOutlined />} title="产品组">
              <Menu.Item key="8" >
                第一组
              </Menu.Item>
              <Menu.Item key="9" >
                第二组
              </Menu.Item>
              <Menu.Item key="10" >
                第三组
              </Menu.Item>
              <Menu.Item key="11" >
                第四组
              </Menu.Item>
              <Menu.Item key="12" >
                第五组
              </Menu.Item>
              <Menu.Item key="13" >
                第六组
              </Menu.Item>
              <Menu.Item key="14" >
                第七组
              </Menu.Item>
            </SubMenu>
            <SubMenu key="ui" icon={<UserOutlined />} title="设计组">
              <Menu.Item key="15" >
                第一组
              </Menu.Item>
              <Menu.Item key="16" >
                第二组
              </Menu.Item>
              <Menu.Item key="17" >
                第三组
              </Menu.Item>
              <Menu.Item key="18" >
                第四组
              </Menu.Item>
              <Menu.Item key="19" >
                第五组
              </Menu.Item>
              <Menu.Item key="20" >
                第六组
              </Menu.Item>
              <Menu.Item key="21" >
                第七组
              </Menu.Item>
            </SubMenu>
            <SubMenu key="fe" icon={<UserOutlined />} title="前端组">
              <Menu.Item key="22" >
                第一组
              </Menu.Item>
              <Menu.Item key="23" >
                第二组
              </Menu.Item>
              <Menu.Item key="24" >
                第三组
              </Menu.Item>
              <Menu.Item key="25" >
                第四组
              </Menu.Item>
              <Menu.Item key="26" >
                第五组
              </Menu.Item>
              <Menu.Item key="27" >
                第六组
              </Menu.Item>
              <Menu.Item key="28" >
                第七组
              </Menu.Item>
            </SubMenu>
            <SubMenu key="be" icon={<UserOutlined />} title="后端组">
              <Menu.Item key="29" >
                第一组
              </Menu.Item>
              <Menu.Item key="30" >
                第二组
              </Menu.Item>
              <Menu.Item key="31" >
                第三组
              </Menu.Item>
              <Menu.Item key="32" >
                第四组
              </Menu.Item>
              <Menu.Item key="33" >
                第五组
              </Menu.Item>
              <Menu.Item key="34" >
                第六组
              </Menu.Item>
              <Menu.Item key="35" >
                第七组
              </Menu.Item>
            </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                content
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}
