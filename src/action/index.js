const getName = (value) => ({
    type: 'get_name',
    username: value,
})

module.exports = {
    getName
};
