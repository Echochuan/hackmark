const defaultState = {
    userid: {
      name: "",
      position: "",
      group_1: [],
      group_2: [],
      group_3: [],
      group_4: [],
      group_5: [],
      group_6: [],
      group_7: []
    }
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'enter_name':
                const newState = JSON.parse(JSON.stringify(state)); // 深度拷贝
                newState.userid.name = action.value;
                console.log("调用成功")
                return newState;
    
        default:
            break;
    }

  return state;
};
