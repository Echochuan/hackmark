import React, { Component } from 'react'
import { Route } from 'react-router'

import markforui from '../Mark/MarkForUI/index'

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href='/design/group_1'>
                        <button className="eachButton" >第一组</button>
                    </a>
                    <a href='/design/group_2'>
                        <button className="eachButton" >第二组</button>
                    </a>
                    <a href='/design/group_3'>
                        <button className="eachButton" >第三组</button>
                    </a>
                    <a href='/design/group_4'>
                        <button className="eachButton" >第四组</button>
                    </a>
                    <a href='/design/group_5'>
                        <button className="eachButton" >第五组</button>
                    </a>
                </div>
                <Route path='/design/Group_1' component={markforui} />
                <Route path='/design/Group_2' component={markforui} />
                <Route path='/design/Group_3' component={markforui} />
                <Route path='/design/Group_4' component={markforui} />
                <Route path='/design/Group_5' component={markforui} />
            </div>
        )
    }
}
