import { Route } from 'react-router'
import markforpm from '../components/Mark/MarkForPM/index'
import lastmarkforpm from '../components/Mark/MarkForPM/lastPage'

let routes = [
    {
        path: '/product/Group_1',
        component: markforpm
    }
]

export default routes;

{/* <Route path='/product/Group_1' component={markforpm} />
<Route path='/product/Group_2' component={markforpm} />
<Route path='/product/Group_3' component={markforpm} />
<Route path='/product/Group_4' component={markforpm} />
<Route path='/product/Group_5' component={markforpm} />
<Route path='/product/Group_6' component={markforpm} />
<Route path='/product/Group_7' component={lastmarkforpm} /> */}