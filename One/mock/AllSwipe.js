const Mock = require ('mockjs');
Mock.mock('/lunbo','get',{
    status: 0,
    list:[
        {id:1,src:'http://img.hb.aicdn.com/e5fb2b07383ccb0527db99c6a70d480223981f2319d42-MpTtTB_fw658'},
        {id:2,src:'http://img.hb.aicdn.com/0ef7065b69774a8a60f6fa040d06224333ef64d5161dd3-WBIad4_fw658'},
        {id:3,src:'http://img.hb.aicdn.com/01966336921b0f1a40f189959b9c659af04c17ee525a-pr8Gla_fw658'},
        {id:4,src:'http://img.hb.aicdn.com/7a69900d47b57f136d189102b6c3a85a3061eb22b5e8f-IdcQip_fw658'},
        {id:5,src:'http://img.hb.aicdn.com/2ce6b59e4aa75a1c364b3c6c3dedc9eca92eb99575fe7-0fyo9y_fw658'},
        {id:6,src:'http://img.hb.aicdn.com/c1fcb955a9bd006fded74a9990bfa72fa644c3ce79f84-sUMCD9_fw658'}
    ]
});