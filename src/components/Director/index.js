import React, { Component } from 'react'
import { Route } from 'react-router'
import './index.css'

import markfordi from "../Mark/MarkForDi/index"

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href='/director/group_1'>
                        <button className="eachButton" onClick = {this.Group_1}>第一组</button>
                    </a>
                    <a href='/director/group_2'>
                        <button className="eachButton" onClick = {this.Group_2}>第二组</button>
                    </a>
                    <a href='/director/group_3'>
                        <button className="eachButton" onClick = {this.Group_3}>第三组</button>
                    </a>
                    <a href='/director/group_4'>
                        <button className="eachButton" onClick = {this.Group_4}>第四组</button>
                    </a>
                    <a href='/director/group_5'>
                        <button className="eachButton" onClick = {this.Group_5}>第五组</button>
                    </a>
                </div>
                <Route path='/director/Group_1' component={markfordi} />
                <Route path='/director/Group_2' component={markfordi} />
                <Route path='/director/Group_3' component={markfordi} />
                <Route path='/director/Group_4' component={markfordi} />
                <Route path='/director/Group_5' component={markfordi} />
            </div>
        )
    }
}
