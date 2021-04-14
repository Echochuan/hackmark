import React from "react";
import store from '../../../store/index';
import "./index.css";
import { Form, Input, Button, notification } from "antd";

const Demo = props => {
  const openNotification = () => {
    notification.open({
      message: "评分成功",
      description: "你已完成该组的评分，请在左侧选择为其他组评分。",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };

  const toNumberValue = obj => {
    if (obj instanceof Array) {
      var arr = [];
      for (var i = 0; i < obj.length; i++) {
        arr[i] = Number(obj[i]);
      }
      return arr;
    } else if (typeof obj == "object") {
      for (var p in obj) {
        obj[p] = Number(obj[p]);
      }
    } else if (typeof obj == "string") {
      obj = Number(obj);
    }
    return obj;
  };

  const onFinish = values => {
    const user = store.getState().username;
    const oldpath = props.location.pathname;
    const newpathArr = oldpath.split("/");
    const position = newpathArr[2];
    const groupIndex = newpathArr[3];
    const newValues = toNumberValue(values);
    // console.log(position);
    // console.log(groupIndex);
    // console.log(values);
    const keyP = "position";
    const keyG = "group";
    const keyN = "username";
    newValues[keyP] = position;
    newValues[keyG] = groupIndex;
    newValues[keyN] = user;
    console.log(newValues);
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
          <Form.Item
            label="完整性/丰富度"
            name="Question"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-9]$|^1[0-5]$/, "g"), message: "此项最高分为15分" }
            ]}
          >
            <Input placeholder="15分" type='number'/>
          </Form.Item>
          <Form.Item
            label="性能"
            name="Question2"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-9]$|^1[0-8]$/, "g"), message: "此项最高分为18分" }
            ]}
          >
            <Input placeholder="18分" type='number'/>
          </Form.Item>
          <Form.Item
            label="扩展性"
            name="Question3"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-7]$/, "g"), message: "此项最高分为7分" }
            ]}
          >
            <Input placeholder="7分" type='number'/>
          </Form.Item>
          <Form.Item
            label="HTTPS证书"
            name="Question4"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-2]$/, "g"), message: "此项最高分为2分" }
            ]}
          >
            <Input placeholder="2分" type='number'/>
          </Form.Item>
          <Form.Item
            label="项目敏感配置"
            name="Question5"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-3]$/, "g"), message: "此项最高分为3分" }
            ]}
          >
            <Input placeholder="3分" type='number'/>
          </Form.Item>
          <Form.Item
            label="数据敏感信息"
            name="Question6"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-3]$/, "g"), message: "此项最高分为3分" }
            ]}
          >
            <Input placeholder="3分" type='number'/>
          </Form.Item>
          <Form.Item
            label="代码规范性"
            name="Question7"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-8]$/, "g"), message: "此项最高分为8分" }
            ]}
          >
            <Input placeholder="8分" type='number'/>
          </Form.Item>
          <Form.Item
            label="数据库规范性"
            name="Question8"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-6]$/, "g"), message: "此项最高分为6分" }
            ]}
          >
            <Input placeholder="6分" type='number'/>
          </Form.Item>
          <Form.Item
            label="接口文档"
            name="Question9"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-3]$/, "g"), message: "此项最高分为3分" }
            ]}
          >
            <Input placeholder="3分" type='number'/>
          </Form.Item>
          <Form.Item
            label="数据库文档"
            name="Question10"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-3]$/, "g"), message: "此项最高分为3分" }
            ]}
          >
            <Input placeholder="3分" type='number'/>
          </Form.Item>
          <Form.Item
            label="单元测试代码覆盖率"
            name="Question11"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-7]$/, "g"), message: "此项最高分为7分" }
            ]}
          >
            <Input placeholder="7分" type='number'/>
          </Form.Item>
          <Form.Item
            label="能现场出解决方案"
            name="Question12"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              { pattern: new RegExp( /^[0-5]$/, "g"), message: "此项最高分为5分" }
            ]}
          >
            <Input placeholder="5分" type='number'/>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};



export default Demo;
