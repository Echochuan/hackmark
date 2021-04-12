import React from "react";
import "./index.css";
import { Form, Input, Button, notification } from "antd";

const Demo = (props) => {

  const openNotification = () => {
    notification.open({
      message: '评分成功',
      description:
        '你已完成该组的评分，请在左侧选择为其他组评分。',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const onFinish = (values) => {
    const oldpath = props.location.pathname;
    const newpathArr = oldpath.split('/');
    const position = newpathArr[2];
    const groupIndex = newpathArr[3];
    // console.log(position);
    // console.log(groupIndex);
    console.log(values);
    //要不要把username也存进路由里面？这样的话就不用redux管理了，username也可以从路由里面拿
    const keyP = "position";
    const keyG = "group";
    const keyN = "username";
    values[keyP] = position;
    values[keyG] = groupIndex;
    //把username取出来取代这个字符串
    values[keyN] = "huangchenruo";
    openNotification();
  };

    const buttonItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 4
      }
    };

    return (
        <div>
          <div className="markbox">
            <Form
              className="markform"
              onFinish={onFinish}
            >
              <Form.Item label="Question" name="Question"  rules={[{ required: true }]}>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Question" name="Question2" rules={[{ required: true }]}>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Question" name="Question3" rules={[{ required: true }]}>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Question" name="Question4" rules={[{ required: true }]}>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Question" name="Question5" rules={[{ required: true }]}>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Question" name="Question6" rules={[{ required: true }]}>
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }

    export default Demo;
