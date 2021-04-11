import React, { Component } from "react";
import './index.css'
import { Form, Input, Button } from "antd";

export default class index extends Component {
  render() {

    const buttonItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 4
      }
    };

    return (
      <div>
          <div className="markbox">
        <Form className="markform">
          <Form.Item label="Question">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Question">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Question">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Question">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Question">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Question">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    );
  }
}
