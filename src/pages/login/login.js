import React from "react";
import axios from "axios";
import store from "../../store/index";
import logo from "../../assets/logo.svg";
import { getToken, getId } from "../../action/index";
import "./login.css";

import { Form, Input, Button, message } from "antd";

import createHashHistory from "history/createHashHistory";
const hashHistory = createHashHistory();

class Login extends React.Component {
  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };

    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

    const onFinish = (values) => {
      axios({
        method: "POST",
        headers: { "Content-type": "application/json" },
        url: "http://121.199.32.101:8088/login",
        data: {
          username: values.username,
          password: values.password,
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            const token = response.data.token;
            const id = response.data.user_id;
            const action = getId(id);
            const action2 = getToken(token);
            store.dispatch(action);
            store.dispatch(action2); //将token存入store中
            hashHistory.push("/mark");
          }
          console.log(response);
        })
        .catch(function (error) {
          message.error("登陆失败");
          console.log(error);
        });
      // console.log(hashHistory);
      // console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
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
            <img src={logo} alt="" style={{ width: 30, marginLeft: 15 }} />
          </div>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
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
                  message: "Please input your username!",
                },
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
                  message: "Please input your password!",
                },
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
      // console.log("subscribe", store.getState());
      this.setState({});
    });
  }
}

export default Login;
