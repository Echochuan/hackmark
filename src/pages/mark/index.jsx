import React, { useEffect, useState } from "react";
import './index.css';
import store from "../../store/index";
import { Form, Button, notification } from "antd";

import { withRouter } from "react-router-dom";

import createHashHistory from "history/createHashHistory";

import { layout, buttonItemLayout } from "../../assets/gutter";
import InputNumberItem from "../components/input-number-item";

import requirements from "./requirements.json";

const hashHistory = createHashHistory();

const analyzePath = path => {
  const arr = path.split("/");
  return {
    position: arr[2],
    group: arr[3]
  };
};

const openNotification = () => {
  notification.open({
    message: "评分成功",
    description: "你已完成该组的评分。",
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
  };

  useEffect(resetformData, [info]);

  //路由切换时清空表单中的内容
  useEffect(() => {
    form.resetFields();
    setInfo(analyzePath(props.history.location.pathname));
  }, [form, props.history.location]);

  const nextGroup = () => {
    //获取现在是第几组，如果是1-6组，点击后跳转到下一组；如果是第7组，则出一个alert说评分已结束
    const user = { ...info };
    const groupid = (+user.group)+1;
    console.log(groupid)
    if (user.group === "7") {
      alert("已评完所有小组！");
      return;
    }
    hashHistory.push("/mark/" + user.position + "/" + groupid);
  }

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
    // const oldpath = props.location.pathname;
    // const newpathArr = oldpath.split("/");
    // const position = newpathArr[2];
    // const groupIndex = newpathArr[3];
    // console.log(position);
    // console.log(groupIndex);
    // console.log(values);
    // console.log(newValues);
    //各个考察点以及分值
    // const newValues = {...values};
    const newValues = toNumberValue(values);
    const username = store.getState().username;
    const user = { ...info };

    // const keyP = "position";
    const keyG = "group";
    const keyN = "username";
    const keyT = "token";
    // newValues[keyP] = user.position;
    newValues[keyG] = user.group;
    newValues[keyN] = username;
    newValues[keyT] = "balabalabala";

    // console.log(username);
    // console.log(user);
    console.log(newValues);

    openNotification();
  };

  return (
    <Form {...{ form }} {...layout} onFinish={onFinish}>
      {formData && formData.map(item => <InputNumberItem {...item} />)}
      {formData && formData.length > 0 && (
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button type="primary" className="nextBtn" onClick={nextGroup}>
            下一组
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default withRouter(Demo);
