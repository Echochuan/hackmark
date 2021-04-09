import React, { Component } from 'react'
import { Route } from 'react-router'

import markforpm from '../Mark/MarkForPM/index'
import lastmarkforpm from '../Mark/MarkForPM/lastPage'

export default class index extends Component {

    render() {
        return (
            <div>
                <div>
                    <a href='/product/group_1'>
                        <button className="eachButton" >第一组</button>
                    </a>
                    <a href='/product/group_2'>
                        <button className="eachButton" >第二组</button>
                    </a>
                    <a href='/product/group_3'>
                        <button className="eachButton" >第三组</button>
                    </a>
                    <a href='/product/group_4'>
                        <button className="eachButton" >第四组</button>
                    </a>
                    <a href='/product/group_5'>
                        <button className="eachButton" >第五组</button>
                    </a>
                    <a href='/product/group_6'>
                        <button className="eachButton" >第六组</button>
                    </a>
                    <a href='/product/group_7'>
                        <button className="eachButton" >第七组</button>
                    </a>
                </div>
                <Route path='/product/Group_1' component={markforpm} />
                <Route path='/product/Group_2' component={markforpm} />
                <Route path='/product/Group_3' component={markforpm} />
                <Route path='/product/Group_4' component={markforpm} />
                <Route path='/product/Group_5' component={markforpm} />
                <Route path='/product/Group_6' component={markforpm} />
                <Route path='/product/Group_7' component={lastmarkforpm} />
            </div>
        )
    }
}
