<template>
    <div class="me-container">
        <div class="header">
            <span class="fa fa-cogs"></span>
            <span class="fa fa-envelope-open-o"></span>
        </div>
        <div class="me-main">
            <div class="self">
                <img src="http://img.hb.aicdn.com/9ee44ab04f50e3bb400e4446b18cd6990e2483993e346-uweMwv_fw658" alt="">
                <p>Y不美丽</p>

            </div>
            <div class="box">
                <img :src="cardList.src" alt="">
                <p>{{cardList.container}}</p>
            </div>
        </div>
        <div class="table">
            <div class="mui-card">
				<div class="mui-card-header">
                    <div>
                        <p>我的收藏</p>
                        <ul>
                            <li>
                                <p class="fa fa-picture-o"></p>
                                <p>图文</p>
                            </li>
                            <li>
                                <p class="fa fa-book"></p>
                                <p>文章</p>
                            </li>
                            <li>
                                <p class="fa fa-music"></p>
                                <p>音乐</p>
                            </li>
                            <li>
                                <p class="fa  fa-film"></p>
                                <p>影视</p>
                            </li>
                            <li>
                                <p class="fa fa-bullhorn"></p>
                                <p>电台</p>
                            </li>
                        </ul>
                    </div>
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            <span class="fa fa-users"></span>&nbsp;&nbsp;
                            <span>我的关注</span>
                            <span>&gt;</span>
                        </p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <p>
                        <span class="fa fa-play-circle"></span>&nbsp;&nbsp;
                        <span>歌单</span>
                        <span>&gt;</span>
                    </p>
                </div>
			</div>
        </div>
    </div>
</template>

<script>
   import AllCard from '../../mock/AllCard.js'
    export default{
        data(){
            return{
                cardList:[]
            }
        },
        created(){
            this.getCardData();
        },
        methods:{
             getCardData(){
                this.$http.get("/card").then(result =>{
                    // console.log(result.body)   
                    var result = result.body                
                    if(result.status == 0){
                        this.cardList = result.list[0]

                        console.log(this.cardList)
                    }else{
                        alert('数据获取失败!')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .me-container{
        width: 100%;
        height: 100vh;
        background: url('http://img.hb.aicdn.com/a18288cf0c0d7ba1722b353a186d18d34414c18faa128-4zz7bO_fw658') no-repeat;
        .header{
            position: fixed;
            width: 100%;
            height:60px;
            background-color: rgba(0, 0, 0, .5);
            color: #111;
            font-size: 20px;
            font-family:  "cursive", "Comic Sans MS", "Comic Sans";
            display: flex;
            justify-content: space-between;
            span{
                margin: 0 20px;
                line-height: 60px;
                color: #aaa;
                font-size: 27px;
            }

        }
        .me-main{
            position: absolute;
            left:50%;
            transform: translateX(-50%);
            top:50px;
            .self{
                img{
                    text-align: center;
                    width: 75px;
                    height: 75px;
                    border-radius: 50%;  
                    margin-left: 35px;                  
                }
                p{
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                }

            }
            .box{                
                // margin-top:80px;
                padding: 3px;
                width: 150px;
                height: 150px;
                background: #fff;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
        }
        .table{
            position: absolute;
            bottom: 50px;
            
            .mui-card{
                width:100vw;
                margin: 0;
                
                .mui-card-header{
                    padding-bottom: 0;
                    p{
                        margin-bottom: 5px;
                    }
                    ul{
                        width:100vw;
                        margin-top: 5px;
                        li{
                            width:20%;
                            list-style: none;
                            float: left;
                            
                            p{
                                &:nth-child(1){
                                    font-size: 30px;
                                }
                                &:nth-child(2){
                                    font-size: 14px;
                                    color: #111;
                                    margin-bottom: 5px;
                                }
                            }
                        }
                    }
                }
                .mui-card-content-inner,
                .mui-card-footer{
                    padding:5px;
                    p{
                        margin: 3px;
                        span{
                            &:nth-child(3){
                                float: right;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
