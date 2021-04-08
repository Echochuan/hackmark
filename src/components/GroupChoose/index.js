import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class index extends Component {

    Group_1 = () => {
        // console.log(this.props.history.location.pathname);
        const now = this.props.history.location.pathname;
        const url = `${now}/group_1`;
        console.log(url);
        this.props.history.push(url);
    }

    Group_2 = () => {
        // console.log(this.props.history.location.pathname);
        const now = this.props.history.location.pathname;
        const url = `${now}/group_2`;
        console.log(url);
        this.props.history.push(url);
    }

    Group_3 = () => {
        // console.log(this.props.history.location.pathname);
        const now = this.props.history.location.pathname;
        const url = `${now}/group_3`;
        console.log(url);
        this.props.history.push(url);
    }

    Group_4 = () => {
        // console.log(this.props.history.location.pathname);
        const now = this.props.history.location.pathname;
        const url = `${now}/group_4`;
        console.log(url);
        this.props.history.push(url);
    }

    Group_5 = () => {
        // console.log(this.props.history.location.pathname);
        const now = this.props.history.location.pathname;
        const url = `${now}/group_5`;
        console.log(url);
        this.props.history.push(url);
    }

    render() {
        return (
            <div>
                <button className="eachButton" onClick = {this.Group_1}>第一组</button>
                <button className="eachButton" onClick = {this.Group_2}>第二组</button>
                <button className="eachButton" onClick = {this.Group_3}>第三组</button>
                <button className="eachButton" onClick = {this.Group_4}>第四组</button>
                <button className="eachButton" onClick = {this.Group_5}>第五组</button>
            </div>
        )
    }
}

export default withRouter(index);
