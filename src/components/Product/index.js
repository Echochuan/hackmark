import React, { Component } from 'react'
import { Route } from 'react-router'

import markforpm from '../Mark/MarkForPM/index'
import lastmarkforpm from '../Mark/MarkForPM/lastPage'

export default class index extends Component {

    Group_1 = () => {
        const btns = document.querySelectorAll(".eachButton");
        btns.style.backgroundColor = "red";
    }

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
                </div>
                <Route path='/product/Group_1' component={markforpm} />
                <Route path='/product/Group_2' component={markforpm} />
                <Route path='/product/Group_3' component={markforpm} />
                <Route path='/product/Group_4' component={markforpm} />
                <Route path='/product/Group_5' component={lastmarkforpm} />
            </div>
        )
    }
}
