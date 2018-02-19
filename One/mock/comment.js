const Mock = require ('mockjs');
Mock.mock('/comment','get',{
    status: 0,
    list:[
        {
            id:1,
            img:"http://q.qlogo.cn/qqapp/1104596227/309FD6DCF94CA1814B95A47194F290EF/100",
            name:"💔",
            date:"2017-07-31 07:47:50",
            container:"其实打动我的是这句，不必浪费时间在不相干的人身上，工作是工作，生活是生活，永远不必委曲求全和不喜欢的同事成为朋友，她们在你人生中出现的时间，短到可以用小时计算，把时间花费在应付这些人的身上，就是在浪费自己的生命。"
        },
        {
            id:2,
            img:"http://wx.qlogo.cn/mmopen/ibw4OpE73cSxlUNBCMo1G7UcRpCRnV4ia7eEB4p35JegOB9iadaicYE681jZ6XGXicr9sYicy7LdiaQr29bkYMXaaFBcksl95Rymtbx/0",
            name:"🍼Ken",
            date:"2017-07-31 08:22:27",
            container:"十年前耿耿于怀     十年后念念不忘"
        },
        {
            id:3,
            img:"http://image.wufazhuce.com/FuZR5Jd8ajqEs2ELVL6DnbeoUDLS?imageView2/1/w/80/h/80/q/75",
            name:"一定要拿暗恋噹屎吃啊",
            date:"2017-07-31 09:17:57",
            container:"世上有种叫杜拉克的草，还有一种树叫天锥树。它缠绕着它生长。当天锥死的时候它也会随它而去，因为有杜拉克草的一生缠绕、不会孤单，就算死、杜拉克草也会陪它一起化成灰。"
        }
        
    ]
});