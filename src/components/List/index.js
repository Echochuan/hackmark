import React, { Component } from "react";
import "./index.css"

import { Input } from 'antd';


export default class List extends Component {

state = { userid : [] }

entername = (event) => {
    const { userid } = this.state;
    const { target } = event;
    console.log("输入成功");
    const user = { name : target.value, position : "" ,group_1 : [], group_2 : [], group_3 : [], group_4 : [], group_5 : [] }
    console.log(user);
    console.log(userid);
    this.setState({userid : user});
    console.log(userid);
}
handleChick = () => {
  console.log("恭喜你点击了！");
}


  render() {

    return (
      <div className="list">
        <div className="nameEnter">
          <Input placeholder="请输入你的名字" onPressEnter={ this.entername } />
        </div>
        <div className="usertip">
          <p>请选择你要评分的职位:</p>
        </div>
        <div className="buttonGroups">
          <a href='/director/group_1'>
            <button className="eachButton" onClick={ this.handleChick } >运营</button>
          </a>
          <a href='/product/group_1'>
            <button className="eachButton" >产品</button>
          </a>
          <a href='/design/group_1'>
            <button className="eachButton" >设计</button>
          </a>
          <a href='/front/group_1'>
            <button className="eachButton" >前端</button>
          </a>
          <a href='/back/group_1'>
            <button className="eachButton" >后端</button>
          </a>
        </div>
      </div>
    );
  }
}
