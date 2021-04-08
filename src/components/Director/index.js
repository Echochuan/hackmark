import React, { Component } from 'react'
import { Route } from 'react-router'
import './index.css'

import Groupchoose from "../GroupChoose/index";
import markfordi from "../Mark/MarkForDi/index"

export default class index extends Component {
    render() {
        return (
            <div>
                <Groupchoose />
                <Route path='/director/Group_1' component={markfordi} />
                <Route path='/director/Group_2' component={markfordi} />
                <Route path='/director/Group_3' component={markfordi} />
                <Route path='/director/Group_4' component={markfordi} />
                <Route path='/director/Group_5' component={markfordi} />
            </div>
        )
    }
}
