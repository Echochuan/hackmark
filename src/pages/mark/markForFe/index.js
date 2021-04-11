import React from "react";
import "./index.css";
import { Form, Input, Button, notification } from "antd";

const Demo = () => {

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

    const onFinish = values => {
      console.log(values);
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
            //   from={from}
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
