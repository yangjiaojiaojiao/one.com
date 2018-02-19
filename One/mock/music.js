const Mock = require ('mockjs');
Mock.mock('/music','get',{
    status: 0,
    list:[
        {   id:1,
            title: "这个世界未必所有事都如你所愿，但总有它的意思",
            author: "文／馆长Jeekit",
            img:'http://image.wufazhuce.com/Fn7saSR-ajtrYi5nnyvZ8eYwynig',
            footer1: '替你高兴 · 谢安琪 | Slowness',
            footer2: '上路去，别太挂念这里。',
            date:'2017/8/20',
            src:""        },
        // {   id:3,
        //     title: "那些千山万水欢笑眼泪，到头来总要喝这一杯",
        //     author: "文／梦醒",
        //     img:'http://image.wufazhuce.com/FpmFkyrGEYx6wfGqArTDZJ3RaDz4',
        //     footer1: '立秋 · 筠子 | 春分 立秋 冬至',
        //     footer2: '要做一件晴朗的事，并且不再害怕天涯。',
        //     date:'2017/8/18',
        //     src:""
        // },
        // {   id:2,
        //     title: "我睡了你女朋友，还一笑而过",
        //     author: "文／杨子虚",
        //     img:'http://image.wufazhuce.com/FvNBOmHsULMZxR2pgFtgDAs2fksl',
        //     footer1: 'Boyfriend · Marika Hackman | I am Not Your Man',
        //     footer2: '当然是选择原谅她啦！',
        //     date:'2017/8/19',
        //     src:""
        // }
        
    ]
});