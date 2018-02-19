<template>
    <div id="center">
        <mt-header fixed title="ONE  IS  ALL"></mt-header>
       
        <mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in newList" :key="item.id">
              <img :src="item.src">
          </mt-swipe-item>          
		</mt-swipe>
       
        <div class="list">
            <h5>分类导航</h5>
            <!-- 路由嵌套!!! -->
            <div class="list-container">
                <ul>
                    <li>
                        <router-link to="/All/Tuwen">
                            <p>图文</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/All/Wenda">
                            <p>问答</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/All/Yuedu">
                            <p>阅读</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/All/Lianzai">
                            <p>连载</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/All/Yingshi">
                            <p>影视</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/All/Yinyue">
                            <p>音乐</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/All/Diantai">
                            <p>电台</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="card">
            <div class="mui-card" v-for = "item in cardList" :key="item.id">
				<div class="mui-card-header mui-card-media" 
                     :style="{height:'40vw',backgroundImage:'url( '+ item.src  +')'}">
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<!-- <p>Posted on January 18, 2016</p> -->
						<p style="color: #333;">{{ item.container }}</p>
					</div>
				</div>
                
		    </div>
        </div>
        
        
    </div>
</template>

<script>
    import AllSwipe from '../../mock/AllSwipe.js'
    import AllCard from '../../mock/AllCard.js'
    export default {
        data(){
            return{
                list:[],
                newList:[],
                cardList:[]

            }
        },
        created(){
            this.getListData();
            this.getCardData();
        },
        methods:{
            getListData(){
                this.$http.get("/lunbo").then(result =>{
                    // console.log(result)
                    var result = result.body
                    if(result.status == 0){
                        this.newList = result.list
                        // console.log(this.newList)
                    }else{
                        alert('数据获取失败!')
                    }
                })
            },
            getCardData(){
                this.$http.get("/card").then(result =>{
                    // console.log(result.body)   
                    var result = result.body  
                    console.log(result)               
                    if(result.status == 0){
                        this.cardList = result.list

                        console.log(this.cardList)
                    }else{
                        alert('数据获取失败!')
                    }
                })
            }
        }

    }


</script>

<style scoped lang="less">
    #center{
        margin-bottom: 65px;
    }
    header{
        background-color: #fff;
         color: #111;
        font-size: 18px;
        font-family:  "cursive", "Comic Sans MS", "Comic Sans";
    }

    // 轮播图
    .mint-swipe{
        height: 230px;
        
		.mint-swipe-item{
			width:100%;
            height:100%;
            img{
                width:100%;
            }
	    }               
    }

    .list{
        margin-top: 10px;
        padding: 10px;
        background: #fff;
        h5{
            color:#111;
            font-size: 18px;
            margin:0;
        }
        .list-container ul{
            margin-top: 10px;
            width: 100%;
            height: 180px;
            padding: 0;
            list-style: none;
                    
            li{
                float: left;
                width: 23%;
                margin:3px;
                a{
                    display: block;
                    width: 100%;
                    height: 90px;
                   
                    overflow: hidden;
                    background-size: cover;  
                    p{
                        color: #fff;
                        font-size: 16px;
                        text-align: center;
                        margin-top: 60px;
                    }
                }
                &:nth-child(1){
                    a{
                        background-image: url('http://img.hb.aicdn.com/55663f55201b23dab450094bb90c8e253496ca32c126-1mDYv3_fw658') 
                    }                    
                }
                &:nth-child(2){
                    a{
                        background-image: url('http://img.hb.aicdn.com/73a590fdda3972a0713c8668e5f6a24dd7af2e53922d-Cm2FQF_fw658') 
                    }                    
                }
                &:nth-child(3){
                    a{
                        background-image: url('http://img.hb.aicdn.com/76b922f0b2554d8e7a2de72a1bc1d3b7add4356442e1f-6L5B67_fw658') 
                    }                    
                }
                &:nth-child(4){
                    a{
                        background-image: url('http://img.hb.aicdn.com/febaa6a834ec3322d7a34ac26976facd9c8765dab773-6Au3zF_fw658') 
                    }                    
                }
                &:nth-child(5){
                    a{
                        background-image: url('http://img.hb.aicdn.com/7083f9fb8be67f28ba8a82f632a05191b17ca0561dd0b-kLRwrt_fw658') 
                    }                    
                }
                &:nth-child(6){
                    a{
                        background-image: url('http://img.hb.aicdn.com/d4c73546c37e3971702aeab7a01b31587484b424101d0-QoFdl7_fw658') 
                    }                    
                }
                &:nth-child(7){
                    a{
                        background-image: url('http://img.hb.aicdn.com/7a9085f536a46c34b3e86a3eb9dd484e91289f1a3f18c-Zkukcp_fw658') 
                    }                    
                }
            } 
            li:nth-child(3){
                width:48%;
            }

        } 
    } 
    .mui-card{
        margin: 0;
        margin-top:10px;
        
    }
    
    
</style>
