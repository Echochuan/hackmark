import React, { Component } from 'react'
import { Route } from 'react-router'

import markforbe from '../Mark/MarkForBE/index'

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href='/back/group_1'>
                        <button className="eachButton" onClick = {this.Group_1}>第一组</button>
                    </a>
                    <a href='/back/group_2'>
                        <button className="eachButton" onClick = {this.Group_2}>第二组</button>
                    </a>
                    <a href='/back/group_3'>
                        <button className="eachButton" onClick = {this.Group_3}>第三组</button>
                    </a>
                    <a href='/back/group_4'>
                        <button className="eachButton" onClick = {this.Group_4}>第四组</button>
                    </a>
                    <a href='/back/group_5'>
                        <button className="eachButton" onClick = {this.Group_5}>第五组</button>
                    </a>
                </div>
                <Route path='/back/Group_1' component={markforbe} />
                <Route path='/back/Group_2' component={markforbe} />
                <Route path='/back/Group_3' component={markforbe} />
                <Route path='/back/Group_4' component={markforbe} />
                <Route path='/back/Group_5' component={markforbe} />
            </div>
        )
    }
}
