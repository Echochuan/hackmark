import React, { Component } from "react";
import "./index.css"
import { Route } from 'react-router-dom';
import director from '../Director/index';

import { Input} from 'antd';


export default class List extends Component {

  render() {
    return (
      <div>
        <div className="nameEnter">
          <Input placeholder="请输入你的名字" />
        </div>
        <Route path='/director' component={director}></Route>
        <div className="buttonGroups">
          <a href='/director'>
            <button className="eachButton" >运营</button>
          </a>
          <button href='/director' className="eachButton" >运营</button>
          <button className="eachButton" >产品</button>
          <button className="eachButton" >设计</button>
          <button className="eachButton" >前端</button>
          <button className="eachButton" >后端</button>
        </div>
      </div>
    );
  }
}
