import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class index extends Component {

    Group_1 = () => {
        // console.log(this.props.history.location.pathname);
        // const now = this.props.history.location.pathname;
        // console.log(now);
        this.props.history.push('group_1');
    }

    render() {
        return (
            <div>
                <button className="eachButton" onClick = {this.Group_1}>第一组</button>
                <button className="eachButton">第二组</button>
                <button className="eachButton">第三组</button>
                <button className="eachButton">第四组</button>
                <button className="eachButton">第五组</button>
            </div>
        )
    }
}

export default withRouter(index);
