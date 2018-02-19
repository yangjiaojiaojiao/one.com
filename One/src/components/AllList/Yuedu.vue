<template>
    <div class="read-centainer">
        <div class="header">
            <span class="fa fa-bars"></span>
            <span> 一个阅读 </span>
            <span class="fa fa-search"></span>
        </div>
        <div class="content">
            <router-link class="mui-card" v-for="item in message" :key="item.id" tag="div" :to="'/All/Yuedu/' + item.id">
                <P>-STORY-</P>
                <p>{{ item.title }}</p>
                <p>{{ item.auther }}</p>
				<div class="mui-card-header mui-card-media" :style="{height:'40vw',backgroundImage:'url('+ item.src +')'}"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>
                            {{ item.container }}
                        </p>
						<p>{{ item.date }}</p>
					</div>
				</div>
			</router-link>
        </div>
    </div>
</template>

<script>
    import read from "../../../mock/ReadPage.js"
    export default {
        data(){
            return {
                message:[],
                name:'aaa'
            }
        },
        created(){
            this.getReadList();     
            },
        methods:{
            getReadList(){
                this.$http.get('/read').then(result =>{
                    var result = result.body;
                    if(result.status == 0){
                        this.message = result.list;
                        // console.log(this.message)
                    }else{
                        alert('no data')
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
.read-centainer{
    .header{
        position: fixed;
        width: 100%;
        height:50px;
        background-color: #fff;
        color: #111;
        font-size: 20px;
        font-family:  "cursive", "Comic Sans MS", "Comic Sans";
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
       span{
           line-height: 50px;
       }

    }
    .content{
        padding-top: 50px;
        padding-bottom: 50px;
        .mui-card{
            padding:15px;
            margin:0;
            margin-bottom: 10px;
            p:nth-child(1){
                margin-top: 10px;
                text-align: center;
            }
            p:nth-child(2){
                font-size: 20px;
                color: #111
            }
            p:nth-child(3){
                font-size: 16px;
            }
            .mui-card-header .mui-card-media{
                height: 60vw;
            }
            .mui-card-content-inner{
                padding: 0;                
                p:nth-child(2){
                    font-size: 14px;
                    color: #8f8f94;
                }
                p:nth-child(1){
                    font-size: 14px;
                }
            }
        }
    }
}

</style>
