import React, { Component } from 'react'
import { Route } from 'react-router'

import markforfe from '../Mark/MarkForFE/index'

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href='/front/group_1'>
                        <button className="eachButton" onClick = {this.Group_1}>第一组</button>
                    </a>
                    <a href='/front/group_2'>
                        <button className="eachButton" onClick = {this.Group_2}>第二组</button>
                    </a>
                    <a href='/front/group_3'>
                        <button className="eachButton" onClick = {this.Group_3}>第三组</button>
                    </a>
                    <a href='/front/group_4'>
                        <button className="eachButton" onClick = {this.Group_4}>第四组</button>
                    </a>
                    <a href='/front/group_5'>
                        <button className="eachButton" onClick = {this.Group_5}>第五组</button>
                    </a>
                </div>
                <Route path='/front/Group_1' component={markforfe} />
                <Route path='/front/Group_2' component={markforfe} />
                <Route path='/front/Group_3' component={markforfe} />
                <Route path='/front/Group_4' component={markforfe} />
                <Route path='/front/Group_5' component={markforfe} />
            </div>
        )
    }
}
