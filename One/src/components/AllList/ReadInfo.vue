<template>
  <div class="readinfo">
        <div class="header">
            <span class="fa fa-bars"></span>
            <span> 一个阅读 </span>
            <span class="fa fa-search"></span>
        </div>
        <div class="container">
            <h2>{{ message.title }}</h2>
            <hr>
            <P>{{ message.auther }}</P>
            <div class="textcontent" v-html="message.textcontent"></div>
            <cmt></cmt>   
        </div>
        <div class="footer">
            <span>上一篇</span>
            <span></span>
            <span>下一篇</span>
        </div>
  </div>
</template>

<script>
    import read from "../../../mock/ReadPage.js";
    import comments from "../subcomponents/comment.vue";
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
                        this.message = result.list[0];
                        console.log(this.message)
                    }else{
                        alert('no data')
                    }
                })
            }
        },
        components:{
            "cmt":comments
        }
    }
</script>


<style lang="less" scoped>
    .header,.footer{
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
    .footer{
        bottom: 50px;;
    }
    .readinfo{
        .container{
            padding:100px 15px; 
            
            h2{
                margin-top: 20px;
                color: #111;
            }
            hr{
                width: 80px;
                height: 4px;
                background: #111;
                border:0;
                margin: 10px 0;
            }
            p{
                color: #111;
            }
            .textcontent{
                    font-size: 20px;                
            }

        }
    }
</style>
