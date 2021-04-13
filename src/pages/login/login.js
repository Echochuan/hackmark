import React from "react";
import './login.css'

import { Form, Input, Button } from "antd";


import createHashHistory from 'history/createHashHistory';
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

      const onFinish = (values) => {
        //把values传给后端判断是否正确 如果正确 跳转到下一个页面并把username存储进store，如果不正确 则提示错误
        //也可以把username传过去，拿来password 判断password是不是相等
        const id={username:'1',password:'1'}
        console.log(hashHistory)
        if(id.username === values.username && id.password === values.password ) {
          console.log("yes!");
          hashHistory.push('init')
        }else{
          alert("信息错误");
        }
        console.log("Success:", values);
      };

      const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
      };

      const login = values => {
        if(true) {
          console.log("yes")
        }else{
          console.log("false")
        }
      }

    return (
        <div className="loginBox">
        <div className="loginBox1">
          <p>欢迎使用HACK评分系统</p>
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
          <Button type="primary" htmlType="submit" onClick={ login }>
            登陆
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  }
}

export default Login;
