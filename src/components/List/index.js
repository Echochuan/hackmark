import React, { Component } from "react";
import "./index.css"
import { Input} from 'antd';


export default class List extends Component {

  render() {
    return (
      <div>
        <div className="nameEnter">
          <Input placeholder="请输入你的名字" />
        </div>
        <div className="buttonGroups">
          <button className="eachButton" >运营</button>
          <button className="eachButton" >产品</button>
          <button className="eachButton" >设计</button>
          <button className="eachButton" >前端</button>
          <button className="eachButton" >后端</button>
        </div>
      </div>
    );
  }
}
