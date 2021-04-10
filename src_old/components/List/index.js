import React, { Component } from "react";
import "./index.css"
import store from '../../store/store'
import { enterName } from '../../store/action';

import { Input } from 'antd';


export default class List extends Component {

constructor(props){
super(props);

this.state = store.getState();
console.log(this.state);
this.handleStoreChange = this.handleStoreChange.bind(this);
// 注册监听store，store变化后调用组件的handleStoreChange方法更新组件的state
store.subscribe(this.handleStoreChange); 
}

handleStoreChange() {
  this.setState(
    store.getState()
  )
}

entername = (event) => {
    const namedata = event.target.value;
    const action = enterName();
    const data = Object.assign({},this.state.userid, {name:namedata});
    this.setState({ userid : data },() => {console.log(this.state.userid)});
    store.dispath(action);
}

handleChickForDI = () => {
  console.log("恭喜你点击了！");
  const data = Object.assign({},this.state.userid, {position:"director"});
  this.setState({ userid : data },() => {console.log(this.state.userid)});
}

handleChickForPM = () => {
  console.log("恭喜你点击了！");
  const data = Object.assign({},this.state.userid, {position:"product"});
  this.setState({ userid : data },() => {console.log(this.state.userid)});
}

handleChickForUI = () => {
  console.log("恭喜你点击了！");
  const data = Object.assign({},this.state.userid, {position:"design"});
  this.setState({ userid : data },() => {console.log(this.state.userid)});
}

handleChickForFE = () => {
  console.log("恭喜你点击了！");
  const data = Object.assign({},this.state.userid, {position:"front"});
  this.setState({ userid : data },() => {console.log(this.state.userid)});
}

handleChickForBE = () => {
  console.log("恭喜你点击了！");
  const data = Object.assign({},this.state.userid, {position:"back"});
  this.setState({ userid : data },() => {console.log(this.state.userid)});
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
            <button className="eachButton" onClick={ this.handleChickForDI } >运营</button>
          </a>
          <a href='/product/group_1'>
            <button className="eachButton" onClick={ this.handleChickForPM } >产品</button>
          </a>
          <a href='/design/group_1'>
            <button className="eachButton" onClick={ this.handleChickForUI } >设计</button>
          </a>
          <a href='/front/group_1'>
            <button className="eachButton" onClick={ this.handleChickForFE } >前端</button>
          </a>
          <a href='/back/group_1'>
            <button className="eachButton" onClick={ this.handleChickForBE } >后端</button>
          </a>
        </div>
      </div>
    );
  }

  componentDidMount(){
    const messages = this.props.location.state;
    console.log(messages);
    const data = Object.assign({},this.state.userid, {group_1:messages});
    console.log(data);
    this.setState({userid : data },() => {console.log(this.state.userid)});
  }
}
