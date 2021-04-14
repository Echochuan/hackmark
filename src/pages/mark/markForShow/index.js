import React from "react";
import store from "../../../store/index";
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
            label="路演表现"
            name="Question"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^1[0-9]$|^20$/, "g"),
                message: "此项最高分为20分"
              }
            ]}
          >
            <Input placeholder="20分" type="number" />
          </Form.Item>
          <Form.Item
            label="PPT契合项目"
            name="Question2"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
          </Form.Item>
          <Form.Item
            label="PPT逻辑框架"
            name="Question3"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
          </Form.Item>{" "}
          <Form.Item
            label="PPT突出重点"
            name="Question4"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
          </Form.Item>{" "}
          <Form.Item
            label="PPT设计创意"
            name="Question5"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
          </Form.Item>{" "}
          <Form.Item
            label="PPT统一风格"
            name="Question6"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
          </Form.Item>{" "}
          <Form.Item
            label="PPT颜色搭配"
            name="Question7"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
          </Form.Item>{" "}
          <Form.Item
            label="PPT动画效果"
            name="Question8"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
          </Form.Item>{" "}
          <Form.Item
            label="PPT文案雕琢"
            name="Question9"
            rules={[
              { required: true, message: "此项为必填项" },
              { pattern: new RegExp(/^[1-9]\d*$/, "g"), message: "请输入数字" },
              {
                pattern: new RegExp(/^[0-9]$|^10$/, "g"),
                message: "此项最高分为10分"
              }
            ]}
          >
            <Input placeholder="10分" type="number" />
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
