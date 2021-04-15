import React from "react";
import axios from 'axios';
import store from "../../store/index";
import logo from "../../assets/logo.svg";
import { getName, getToken } from "../../action/index";
import "./login.css";

import { Form, Input, Button } from "antd";

import createHashHistory from "history/createHashHistory";
const hashHistory = createHashHistory();

class Login extends React.Component {
  render() {
    const layout = {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16
      }
    };

    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16
      }
    };

    const onFinish = values => {
      //把values传给后端判断是否正确 如果正确 跳转到下一个页面并把username存储进store，如果不正确 则提示错误
      //也可以把username传过去，拿来password 判断password是不是相等
      const action1 = getName(values.username);
      store.dispatch(action1); //将输入的username存入store中

      const token = "balbabla";
      const action2 = getToken(token);
      store.dispatch(action2); //将token存入store中

      const id = { username: "1", password: "1" };
      console.log(hashHistory);
      if (id.username === values.username && id.password === values.password) {
        console.log("yes!");
        hashHistory.push("/mark");
      } else {
        alert("信息错误");
      }
      console.log("Success:", values);
    };

    const onFinishFailed = errorInfo => {
      console.log("Failed:", errorInfo);
    };

    return (
      <div className="loginBox">
        <div className="loginBox1">
          <div
            class="login-header"
            // style={{
            //   padding: "0 25px",
            //   color: "black",
            //   fontSize: 15,
            //   letterSpacing: 3
            // }}
          >
            <img src={logo} alt="" style={{ width: 30, marginLeft: 15}} />
          </div>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!"
                }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log("subscribe", store.getState());
      this.setState({});
    });
  }
}

export default Login;
