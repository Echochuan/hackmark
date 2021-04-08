import React, { Component } from 'react'
import { Input, Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import './index.css'

const { confirm } = Modal;

export default class index extends Component {

    showConfirm = () => {
        confirm({
          title: '请问你是否要提交？',
          icon: <ExclamationCircleOutlined />,
          content: '确定后无法修改，请多多检查',
          onOk() {
            console.log('Ok');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }

    render() {
        return (
            <div className="boxForDi">
                <div className="markTip">请对以下项目评分</div>
                <div className="markBox">
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                    <Input className="eachEnter" addonBefore="Question" suffix="分"  defaultValue="" />
                </div>
                <Button className="YesBtn" size="large" onClick= { this.showConfirm }> 确认 </Button>
            </div>
        )
    }
}
