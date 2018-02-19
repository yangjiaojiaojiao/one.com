const Mock = require ('mockjs');
Mock.mock('/onebg','get',{
    status: 0,
    list:[
        {   id:1,
            src:'http://image.wufazhuce.com/FlggtVQa7ruoHXRNB1CAfhQJylNn',
            container:'五年前，你带我来到ONE，你说，复杂世界里，一个就够了，就像我就是你的全世界。五年后，我还在这里，你也还在吗？'
        }
    ]
});