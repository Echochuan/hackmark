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
        {/* <Route path='/director' component={director}></Route> */}
        <div className="buttonGroups">
          <a href='/director'>
            <button href='/director' className="eachButton" >运营</button>
          </a>
          <a href='/product'>
            <button className="eachButton" >产品</button>
          </a>
          <a href='/design'>
            <button className="eachButton" >设计</button>
          </a>
          <a href='/front'>
            <button className="eachButton" >前端</button>
          </a>
          <a href='/back'>
            <button className="eachButton" >后端</button>
          </a>
        </div>
      </div>
    );
  }
}
