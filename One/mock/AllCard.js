const Mock = require ('mockjs');
Mock.mock('/card','get',{
    status: 0,
    list:[
        {
            id:6,
            src: 'http://image.wufazhuce.com/FqkbJIi3JKG7HAXGaisNf2i3spky',
            container:'生活并非长途旅行，而是一次又一次的郊游。'
        },
        {
            id:5,
            src:'http://image.wufazhuce.com/FlggtVQa7ruoHXRNB1CAfhQJylNn',
            container:'五年前，你带我来到ONE，你说，复杂世界里，一个就够了，就像我就是你的全世界。五年后，我还在这里，你也还在吗？'
        },
        {   id:1,
            src:'http://image.wufazhuce.com/FqXlx-JL0WRqmdy69QbCGCFxv-8j',
            container:'想从友谊中得到些什么，这想法本身就错了。如果从损益得失的角度来考虑，那友谊就只有损失。但是，我喜欢那个家伙。如果我知道他有了麻烦，我就想帮他。'
        },
        {   id:2,
            src:'http://image.wufazhuce.com/Fpwj8mGRtLuEqzs_54d2DGIv8r3q',
            container:'痛苦的时候，能坦然流露痛苦的表情，是很幸福的人；紧张的时候，能直接显露紧张的姿势，是很幸福的人。'
        },
        {   id:3,
            src:'http://image.wufazhuce.com/FjzR2HL4z7uVUZ1xc3qJiUUE5Pef',
            container:'事实上，咖啡，酒精，烟草，甚至恋爱都不曾给过我持续的，真实的安慰。这就是最让我感到难过的地方，从始至终，我的金钱与时间，我的热情与爱意，都不曾找到一个可以彻底浪费的对象。 '
        },
        {   id:4,
            src:'http://image.wufazhuce.com/FrJ43sAyXvFIQtZ0OJIZT0AjEzAa',
            container:'机会是留给有所准备的人，而且是留给懂得如何规避堵车的人。'
        }
       
    ]
});