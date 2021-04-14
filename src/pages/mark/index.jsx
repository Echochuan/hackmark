import React, { useEffect, useState } from "react";
import store from '../../store/index';
import { Form, Button, notification } from "antd";

import { withRouter } from 'react-router-dom';

import { layout, buttonItemLayout } from '../../assets/gutter'
import InputNumberItem from '../components/input-number-item';

import requirements from './requirements.json';

const analyzePath = (path) => {
  const arr = path.split('/');
  return {
    position: arr[2],
    group: arr[3]
  }
}

const openNotification = () => {
  notification.open({
    message: "评分成功",
    description: "你已完成该组的评分，请在左侧选择为其他组评分。",
    onClick: () => {
      console.log("Notification Clicked!");
    }
  });
};

const Demo = props => {
  const [form] = Form.useForm();
  const [info, setInfo] = useState({});
  const [formData, setFormData] = useState([]);

  const resetformData = () => {
    setFormData(requirements[info.position]);
  }

  useEffect(resetformData, [info]);

  //路由切换时清空表单中的内容
  useEffect(() => {
    form.resetFields();
    setInfo(analyzePath(props.history.location.pathname));
  }, [form, props.history.location]);


  const onFinish = values => {
    // const user = store.getState().username;
    // const oldpath = props.location.pathname;
    // const newpathArr = oldpath.split("/");
    // const position = newpathArr[2];
    // const groupIndex = newpathArr[3];
    // const newValues = toNumberValue(values);
    // console.log(position);
    // console.log(groupIndex);
    // console.log(values);
    // const keyP = "position";
    // const keyG = "group";
    // const keyN = "username";
    // newValues[keyP] = position;
    // newValues[keyG] = groupIndex;
    // newValues[keyN] = user;
    // console.log(newValues);
    // openNotification();
    //各个考察点以及分值
    console.log({...values});
    //被考察的职位以及组别
    console.log({...info});
  };

  return (
    <Form
      {...{ form }}
      {...layout}
      onFinish={onFinish}
    >
      {
        formData &&
        formData.map(item => (
          <InputNumberItem {...item} />
        ))
      }
      {formData && formData.length > 0 &&
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      }
    </Form>
  );
};

export default withRouter(Demo);
