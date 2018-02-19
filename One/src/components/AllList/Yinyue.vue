<template>
    <div class="read-centainer">
        <div class="header">
            <span class="fa fa-bars"></span>
            <span> 一个音乐 </span>
            <span class="fa fa-search"></span>
        </div>
        <div class="content">
            <div class="mui-card" v-for="item in newList" :key="item.id">
                <P>-音乐-</P>
                <p>{{ item.title }}</p>
                <p>{{ item.author }}</p>
				<div class="mui-card-header mui-card-media" :style="{height:'63vw',backgroundImage:'url(http://image.wufazhuce.com/music-list-right.png)'}">
                    <div class="img">
                        <img id="roll"                             
                             :class="[rotate?'go':'aa']"
                             :src="item.img"     
                             @click="start"                        
                             >                        
                        <img src="http://image.wufazhuce.com/music_copyright_1.png">
                        <audio class="success"
                               id="audio"                                                            
                               src="/static/audios/music.mp3">
                        </audio>
                    </div>
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p> {{item.footer1}} </p>
						<p> {{item.footer2}} </p>
                        <p> {{item.date}} </p>
					</div>
				</div>
            </div>
        </div>
    </div>
</template>

<script>
    import music from '../../../mock/music.js'
    export default {
        data(){
            return {
                newList: [],
                rotate : false,
                audio: document.getElementById('audio')
            }
        },
        created(){
            this.getInfo()
            // this.start()
        },
        methods: {
           start(){      
               audio.play()         
               this.rotate = !this.rotate
               
           },
           getInfo(){
               this.$http.get("/music").then(result =>{
                    // console.log(result)
                    var result = result.body
                    if(result.status == 0){
                        this.newList = result.list
                    }else{
                        alert('数据获取失败!')
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
            // padding:15px;
            margin:0;
            margin-bottom: 10px;
            p{
                padding: 0 15px;
                &:nth-child(1){
                margin-top: 10px;
                text-align: center;
                }
                &:nth-child(2){
                    font-size: 20px;
                    color: #111
                }
                &:nth-child(3){
                    font-size: 16px;
                }
            }
            

            .mui-card-header.mui-card-media{
                position: relative;
                background-size: auto 100%;
                background:no-repeat;
                // transform: rotate(180deg) ;
                padding:0;
                height: 60vw;
                .img{
                    position: relative;
                    float: right;
                    width: 78%;
                    height: 220px;
                    // border:3px solid #000;
                    border-radius: 115px 0 0 115px;
                    box-shadow: 0 0 5px 5px #ccc;
                    img:nth-child(1){
                        position: absolute;
                        left:10px;
                        top:10px;
                        width: 200px;
                        height:200px;
                        border-radius: 50%;
                        text-align: center;
                    }
                    img:nth-child(2){
                        position: absolute;
                        right: 20px;
                        bottom: 20px;
                        width: 30px;
                        height: 30px;
                    }
                }
                
            }
            .mui-card-content-inner{
                padding: 0;   
                color: #808080;  
                p{
                    padding: 0px 15px;
                    margin: 0px;
                }           
                p:nth-child(1){
                    text-align: left;
                    font-size: 14px;                    
                }
                p:nth-child(2){
                    text-align: left;
                    font-size: 15px;                    
                }
                p:nth-child(3){
                    text-align: left;
                    font-size: 16px; 
                    margin:10px 0;                   
                }
            }
        }
    }
}
    .aa{
        transition: all 2s;
    }
    .go{
        transform:rotate(999deg);
        transition: all 33s;
    }
</style>
