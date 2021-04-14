import React, { Component } from "react";
import { Route } from "react-router";
import store from '../../store/index';
import { Layout, Menu } from "antd";

import logo from '../../assets/logo.svg';

import director from "../mark/markForDi/index";
import product from "../mark/markForPm/index";
import design from "../mark/markForUi/index";
import front from "../mark/markForFe/index";
import back from "../mark/markForBe/index";
import show from "../mark/markForShow/index";

import { UserOutlined } from "@ant-design/icons";

import createHashHistory from "history/createHashHistory";
const hashHistory = createHashHistory();

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class init_page extends Component {
  updata = value => {
    // console.log("updata start");
    // console.log(value);
    value = value % 7;
    if (value === 0) {
      value = 7;
    }
    return value;
  };

  Click = e => {
    const position = e.keyPath[1];
    const group = e.keyPath[0];
    const groupid = this.updata(group);
    // console.log(groupid);
    hashHistory.push("/init/" + position + "/" + groupid);
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: "0 25px", color: "#FFF", fontSize: 18, letterSpacing: 3}}
          >
            <img src={logo} alt="" style={{width: 30, marginRight: 15}} />
            Hackton评分系统
          </Header>
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
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
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
                {/* 我记得好像可以写在router.js里，然后在这里逐次遍历，但不记得具体怎么写了，先这样用着。你妈的 看起来真丑啊*/}
                <div className="route">
                  <Route path="/init/director" component={director} />
                  <Route path="/init/product/1" component={product} />
                  <Route path="/init/product/2" component={product} />
                  <Route path="/init/product/3" component={product} />
                  <Route path="/init/product/4" component={product} />
                  <Route path="/init/product/5" component={product} />
                  <Route path="/init/product/6" component={product} />
                  <Route path="/init/product/7" component={product} />
                  <Route path="/init/design/1" component={design} />
                  <Route path="/init/design/2" component={design} />
                  <Route path="/init/design/3" component={design} />
                  <Route path="/init/design/4" component={design} />
                  <Route path="/init/design/5" component={design} />
                  <Route path="/init/design/6" component={design} />
                  <Route path="/init/design/7" component={design} />
                  <Route path="/init/front/1" component={front} />
                  <Route path="/init/front/2" component={front} />
                  <Route path="/init/front/3" component={front} />
                  <Route path="/init/front/4" component={front} />
                  <Route path="/init/front/5" component={front} />
                  <Route path="/init/front/6" component={front} />
                  <Route path="/init/front/7" component={front} />
                  <Route path="/init/back/1" component={back} />
                  <Route path="/init/back/2" component={back} />
                  <Route path="/init/back/3" component={back} />
                  <Route path="/init/back/4" component={back} />
                  <Route path="/init/back/5" component={back} />
                  <Route path="/init/back/6" component={back} />
                  <Route path="/init/back/7" component={back} />
                  <Route path="/init/show/1" component={show} />
                  <Route path="/init/show/2" component={show} />
                  <Route path="/init/show/3" component={show} />
                  <Route path="/init/show/4" component={show} />
                  <Route path="/init/show/5" component={show} />
                  <Route path="/init/show/6" component={show} />
                  <Route path="/init/show/7" component={show} />
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
    const name = store.getState().username;
    if (name === '') {
      alert('请先登陆！');
      hashHistory.push('/')
    }
    store.subscribe(() => {
      console.log("subscribe", store.getState());
      this.setState({});
    });
  }

}
