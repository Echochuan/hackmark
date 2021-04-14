const defaultState = {
    username: ''
}

export default (state = defaultState, action) => {
    console.log('redux is on');
    return action['type'] === 'get_name' ? Object.assign({}, state, action) : state;
}
