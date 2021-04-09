import React, { Component } from 'react'
import { Route } from 'react-router'

import markforfe from '../Mark/MarkForFE/index'
import lastmarkforfe from '../Mark/MarkForFE/lastPage'

export default class index extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href='/front/group_1'>
                        <button className="eachButton" >第一组</button>
                    </a>
                    <a href='/front/group_2'>
                        <button className="eachButton" >第二组</button>
                    </a>
                    <a href='/front/group_3'>
                        <button className="eachButton" >第三组</button>
                    </a>
                    <a href='/front/group_4'>
                        <button className="eachButton" >第四组</button>
                    </a>
                    <a href='/front/group_5'>
                        <button className="eachButton" >第五组</button>
                    </a>
                </div>
                <Route path='/front/Group_1' component={markforfe} />
                <Route path='/front/Group_2' component={markforfe} />
                <Route path='/front/Group_3' component={markforfe} />
                <Route path='/front/Group_4' component={markforfe} />
                <Route path='/front/Group_5' component={lastmarkforfe} />
            </div>
        )
    }
}
