import React, { useState } from "react";
import { Form, Input } from "antd";

const validateNumber = (number, maxScore) => {
  if (number < 0 || number > maxScore) {
    return {
      validateStatus: 'error',
      errorMsg: '该项的评分范围为0~10!',
    };
  }
  return {
    validateStatus: 'success',
    errorMsg: null,
  };
}


const InputNumberItem = ({ label, name, maxScore }) => {
  const [number, setNumber] = useState({
    value: null,
  });


  const onNumberChange = (e) => {
    const value = e.target.value;
    setNumber({ ...validateNumber(value, maxScore), value });
  };

  return (
    <Form.Item
      {...{ label, name }}
      rules={[
        { required: true, message: "此项为必填项" },
      ]}
      validateStatus={number.validateStatus}
      help={number.errorMsg}
    >
      <Input
        type="number"
        min={0}
        max={maxScore}
        value={number.value}
        onChange={onNumberChange}
        placeholder={maxScore && `${maxScore}分`}
      />
    </Form.Item>
  )
}

export default InputNumberItem;
