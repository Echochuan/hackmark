const getName = (value) => ({
  type: "get_name",
  username: value,
});

const getToken = (value) => ({
  type: "get_token",
  token: value,
});

const getId = (value) => ({
  type: "get_id",
  user_id: value,
});

module.exports = {
  getName,
  getToken,
  getId,
};
