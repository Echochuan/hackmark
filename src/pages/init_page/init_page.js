import React, { Component } from "react";
import store from "../../store/index";
// eslint-disable-next-line
import { Layout, Menu, message } from "antd";

import logo from "../../assets/logo.svg";
import Mark from "../mark";

import { UserOutlined } from "@ant-design/icons";

import createHashHistory from "history/createHashHistory";
const hashHistory = createHashHistory();

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class init_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }
  toggle = () => {
    this.setState(
      {
        collapsed: !this.state.collapsed,
      },
      () => {
        console.log(this.state.collapsed);
      }
    );
  };

  updata = (value) => {
    // console.log("updata start");
    // console.log(value);
    value = value % 7;
    if (value === 0) {
      value = 7;
    }
    return value;
  };

  //判断是否为移动设备
  isMobile = () => {
    var sUserAgent = navigator.userAgent;
    if (
      sUserAgent.indexOf("Android") > -1 ||
      sUserAgent.indexOf("iPhone") > -1 ||
      sUserAgent.indexOf("iPad") > -1 ||
      sUserAgent.indexOf("iPod") > -1 ||
      sUserAgent.indexOf("Symbian") > -1
    ) {
      return true;
    }
  };

  Click = (e) => {
    if (this.isMobile()) {
      this.toggle();
    }
    console.log(this.state.collapsed);
    const position = e.keyPath[1];
    const group = e.keyPath[0];
    const groupid = this.updata(group);
    // console.log(groupid);
    hashHistory.push("/mark/" + position + "/" + groupid);
  };

  getPath = () => {
    const arr = this.props.location.pathname.split("/");
    const position = arr[2];
    const group = arr[3];
    if (position === "product") {
      const key = 7 + +group;
      return key.toString();
    } else if (position === "design") {
      const key = 14 + +group;
      return key.toString();
    } else if (position === "front") {
      const key = 21 + +group;
      return key.toString();
    } else if (position === "back") {
      const key = 28 + +group;
      return key.toString();
    } else if (position === "show") {
      const key = 35 + +group;
      return key.toString();
    }
    return group;
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: "0 25px",
            color: "#FFF",
            fontSize: 18,
            letterSpacing: 3,
          }}
        >
          <img src={logo} alt="" style={{ width: 30, marginRight: 15 }} />
          Hackathon评分系统
        </Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            collapsed={this.state.collapsed}
            collapsible
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
              this.toggle();
            }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              selectedKeys={[this.getPath()]} //获取地址，然后根据地址得出此时item的key 然后把这个key放进去
              onClick={this.Click}
            >
              <SubMenu key="director" icon={<UserOutlined />} title="运营组">
                <Menu.Item key="1">第一组</Menu.Item>
                <Menu.Item key="2">第二组</Menu.Item>
                <Menu.Item key="3">第三组</Menu.Item>
                <Menu.Item key="4">第四组</Menu.Item>
                <Menu.Item key="5">第五组</Menu.Item>
                <Menu.Item key="6">第六组</Menu.Item>
                <Menu.Item key="7">第七组</Menu.Item>
              </SubMenu>
              <SubMenu key="product" icon={<UserOutlined />} title="产品组">
                <Menu.Item key="8">第一组</Menu.Item>
                <Menu.Item key="9">第二组</Menu.Item>
                <Menu.Item key="10">第三组</Menu.Item>
                <Menu.Item key="11">第四组</Menu.Item>
                <Menu.Item key="12">第五组</Menu.Item>
                <Menu.Item key="13">第六组</Menu.Item>
                <Menu.Item key="14">第七组</Menu.Item>
              </SubMenu>
              <SubMenu key="design" icon={<UserOutlined />} title="设计组">
                <Menu.Item key="15">第一组</Menu.Item>
                <Menu.Item key="16">第二组</Menu.Item>
                <Menu.Item key="17">第三组</Menu.Item>
                <Menu.Item key="18">第四组</Menu.Item>
                <Menu.Item key="19">第五组</Menu.Item>
                <Menu.Item key="20">第六组</Menu.Item>
                <Menu.Item key="21">第七组</Menu.Item>
              </SubMenu>
              <SubMenu key="front" icon={<UserOutlined />} title="前端组">
                <Menu.Item key="22">第一组</Menu.Item>
                <Menu.Item key="23">第二组</Menu.Item>
                <Menu.Item key="24">第三组</Menu.Item>
                <Menu.Item key="25">第四组</Menu.Item>
                <Menu.Item key="26">第五组</Menu.Item>
                <Menu.Item key="27">第六组</Menu.Item>
                <Menu.Item key="28">第七组</Menu.Item>
              </SubMenu>
              <SubMenu key="back" icon={<UserOutlined />} title="后端组">
                <Menu.Item key="29">第一组</Menu.Item>
                <Menu.Item key="30">第二组</Menu.Item>
                <Menu.Item key="31">第三组</Menu.Item>
                <Menu.Item key="32">第四组</Menu.Item>
                <Menu.Item key="33">第五组</Menu.Item>
                <Menu.Item key="34">第六组</Menu.Item>
                <Menu.Item key="35">第七组</Menu.Item>
              </SubMenu>
              <SubMenu key="show" icon={<UserOutlined />} title="路演">
                <Menu.Item key="36">第一组</Menu.Item>
                <Menu.Item key="37">第二组</Menu.Item>
                <Menu.Item key="38">第三组</Menu.Item>
                <Menu.Item key="39">第四组</Menu.Item>
                <Menu.Item key="40">第五组</Menu.Item>
                <Menu.Item key="41">第六组</Menu.Item>
                <Menu.Item key="42">第七组</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <div className="route">
                  <Mark />
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              NCUHOME ©2021 Created by love
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  componentDidMount() {
    console.log("subscribe", store.getState());
    const token = store.getState().token;
    if (token === '') {
      message.warning('请先登陆！');
      hashHistory.push('/')
    }
    store.subscribe(() => {
      console.log("subscribe", store.getState());
      this.setState({});
    });
  }
}
