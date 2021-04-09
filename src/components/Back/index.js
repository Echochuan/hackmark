import React, { Component } from 'react'
import { Route } from 'react-router'

import markforbe from '../Mark/MarkForBE/index'
import lastmarkforbe from '../Mark/MarkForBE/lastPage'

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href='/back/group_1'>
                        <button className="eachButton" >第一组</button>
                    </a>
                    <a href='/back/group_2'>
                        <button className="eachButton" >第二组</button>
                    </a>
                    <a href='/back/group_3'>
                        <button className="eachButton" >第三组</button>
                    </a>
                    <a href='/back/group_4'>
                        <button className="eachButton" >第四组</button>
                    </a>
                    <a href='/back/group_5'>
                        <button className="eachButton" >第五组</button>
                    </a>
                    <a href='/back/group_6'>
                        <button className="eachButton" >第六组</button>
                    </a>
                    <a href='/back/group_7'>
                        <button className="eachButton" >第七组</button>
                    </a>
                </div>
                <Route path='/back/Group_1' component={markforbe} />
                <Route path='/back/Group_2' component={markforbe} />
                <Route path='/back/Group_3' component={markforbe} />
                <Route path='/back/Group_4' component={markforbe} />
                <Route path='/back/Group_5' component={markforbe} />
                <Route path='/back/Group_6' component={markforbe} />
                <Route path='/back/Group_7' component={lastmarkforbe} />
            </div>
        )
    }
}
