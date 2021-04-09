import React, { Component } from "react";
import "./index.css"

import { Input } from 'antd';


export default class List extends Component {

state = { userid : { name : "", position : "" ,group_1 : [], group_2 : [], group_3 : [], group_4 : [], group_5 : [], group_6 :[], group_7:[] } }

entername = (event) => {
    const namedata = event.target.value;
    const data = Object.assign({},this.state.userid, {name:namedata});
    console.log(data);
    this.setState({ userid : data },() => {console.log(this.state.userid)});
}

handleChick = () => {
  console.log("恭喜你点击了！");
  console.log(this.state.userid)
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
