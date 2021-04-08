import React, { Component } from 'react'
import { Input } from 'antd';
import './index.css'


export default class index extends Component {
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
            </div>
        )
    }
}
