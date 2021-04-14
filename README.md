
    已完成简单鉴权 现在能够通过{username:"1",password:"1"}登陆并进入打分页面，同时会记录username，在之后的页面加载时会检测username是否为空，从而判断是否登陆，如果检测出为空（未登陆），则警告并跳转回登陆页面。

    关于router.js的配置...

    每个职位的每个组评分完毕之后，将{username:'',position:'',Question: ...}传送给后端储存
