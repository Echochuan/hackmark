import React, { useEffect } from "react";
import store from '../../../store/index';
import { Form, Button, notification } from "antd";

import { layout, buttonItemLayout } from '../../../assets/gutter'
import InputNumberItem from '../../components/input-number-item';

const datas = [
  {
    label: "产品slogan",
    name: "Question",
    maxScore: 10,
  },
  {
    label: "线上推广文案",
    name: "线上推广文案",
    maxScore: 15,
  },
  {
    label: "活动策划idea",
    name: "活动策划idea",
    maxScore: 15,
  },
  {
    label: "活动策划完整度",
    name: "活动策划完整度",
    maxScore: 15,
  },
  {
    label: "后期运营规划",
    name: "后期运营规划",
    maxScore: 15,
  },
  {
    label: "产品交互方案",
    name: "产品交互方案",
    maxScore: 10,
  },
  {
    label: "调研文档推广",
    name: "调研文档推广",
    maxScore: 10,
  },
  {
    label: "产品名称",
    name: "产品名称",
    maxScore: 10,
  },

]

const Demo = props => {
  const [form] = Form.useForm();

  const openNotification = () => {
    notification.open({
      message: "评分成功",
      description: "你已完成该组的评分，请在左侧选择为其他组评分。",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };

  //路由切换时清空表单中的内容
  useEffect(() => {
    form.resetFields();
  }, [form, props.history.location]);

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

  return (
    <Form
      {...{ form }}
      {...layout}
      onFinish={onFinish}
    >
      {
        datas.map(item => (
          <InputNumberItem {...item} />
        ))
      }
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
