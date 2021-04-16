const defaultState = {
    username: '',
    token: '',
}

// eslint-disable-next-line
export default (state = defaultState, action) => {
    console.log('redux is on');
    if (action['type'] === 'get_name') {
        return Object.assign({}, state, action)
    } else if (action['type'] === 'get_token') {
        return Object.assign({}, state, action)
    } else if (action['type'] === 'get_id') {
        return Object.assign({}, state, action)
    }
    return state;
}
