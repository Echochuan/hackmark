const getName = (value) => ({
    type: 'get_name',
    username: value,
})

const getToken = (value) => ({
    type: 'get_token',
    token: value
})

module.exports = {
    getName,
    getToken
};
