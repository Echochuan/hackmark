import React, { useEffect, useState } from "react";
import store from "../../store/index";
import axios from "axios";
import { Form, Button, notification, message, Card, Row, Col } from "antd";

import { withRouter } from "react-router-dom";

import createHashHistory from "history/createHashHistory";

import InputNumberItem from "../components/input-number-item";

import requirements from "./requirements.json";

const hashHistory = createHashHistory();

const { Meta } = Card;

const layout = {
  labelCol: { sm: 7, lg: 6 },
  wrapperCol: { sm: 10, lg: 12 }
};

const buttonItemLayout = {
  wrapperCol: {
    sm: {
      offset: 7,
      span: 9
    },
    lg: {
      offset: 6,
      span: 12
    }
  }
};

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

  const getGroup = () => {
    const user = { ...info }.group;
    if (user === undefined) {
      return "欢迎使用评分系统";
    }
    return `第${user}组`;
  };

  const getgroup = getGroup();

  //获取并展示当前组别
  const getPosition = () => {
    const user = { ...info };
    console.log(user.position);
    if (user.position === "director") {
      return "运营组";
    } else if (user.position === "product") {
      return "产品组";
    } else if (user.position === "design") {
      return "设计组";
    } else if (user.position === "front") {
      return "前端组";
    } else if (user.position === "back") {
      return "后端组";
    } else if (user.position === "show") {
      return "路演";
    }
  };

  const nowPosition = getPosition();

  //路由切换时清空表单中的内容
  useEffect(() => {
    form.resetFields();
    setInfo(analyzePath(props.history.location.pathname));
  }, [form, props.history.location]);

  const warning = () => {
    message.warning("已完成所有小组评分");
  };

  const nextGroup = () => {
    //获取现在是第几组，如果是1-6组，点击后跳转到下一组；如果是第7组，则出一个alert说评分已结束
    const user = { ...info };
    const groupid = +user.group + 1;
    console.log(groupid);
    if (user.group === "7") {
      warning();
      return;
    }
    hashHistory.push("/mark/" + user.position + "/" + groupid);
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
    const newValues = toNumberValue(values);
    const user_id = store.getState().user_id;
    // const token = store.getState().token;
    console.log(store.getState().token)
    const user = { ...info };
    console.log(`/api/${user.position}/${user.group}`)

    // const keyP = "position";
    const keyG = "group_id";
    const keyN = "name";
    const keyU = "user_id";
    // const keyT = "token";
    // newValues[keyP] = user.position;
    newValues[keyG] = user.group;
    newValues[keyN] = "6109119066";
    // newValues[keyT] = token;
    newValues[keyU] = user_id;

    console.log(newValues);

    axios({
      method: "POST",
      headers: { "Content-type": "application/json", "authorization": store.getState().token },
      url: `/api/${user.position}/${user.group}`,
      data: newValues
    })
      .then(function(response) {
        console.log(response);
        openNotification();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <>
      <Card hoverable style={{ width: 240, margin: "20px auto" }}>
        <Meta title={nowPosition} description={getgroup} />
      </Card>
      <Form {...{ form }} {...layout} onFinish={onFinish}>
        {formData && formData.map(item => <InputNumberItem {...item} />)}
        {formData && formData.length > 0 && (
          <Form.Item {...buttonItemLayout}>
            <Row justify="space-around">
              <Col>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Col>
              <Col>
                <Button
                  type="primary"
                  style={{ marginLeft: 50 }}
                  onClick={nextGroup}
                >
                  下一组
                </Button>
              </Col>
            </Row>
          </Form.Item>
        )}
      </Form>
    </>
  );
};

export default withRouter(Demo);
