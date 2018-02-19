<template>
    <div class="one-page">
        <div class="header">
            <span> {{ time1 | dateFormat }} </span>
            <span> {{ time1 | dateFormat1 }} </span>
            <span>气候 地理位置</span>
        </div>
        
        <div class="container">
           <div class="envelop">
              <div class="fonts">
                   <h1>{{ time1 | dateFormat }}</h1>
                   <h3>VOL.1934 | {{ time1 | dateFormat1 }}</h3>
                    <p>
                    五年前，你带我来到ONE，你说，复杂世界里，一个就够了，就像我就是你的全世界。五年后，我还在这里，你也还在吗？
                    </p>
                    <span class="fa fa-chevron-down"></span>
              </div>
           </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import moment from "moment";
    Vue.filter('dateFormat',function(dataStr,pattern = "DD"){
	    return moment(dataStr).format(pattern)
    })
    Vue.filter('dateFormat1',function(dataStr,pattern = "MM/YYYY"){
	    return moment(dataStr).format(pattern)
    })
    export default{
        data(){            
            return {
                time1 : new Date()
                // console.log(date)
            }
        }
    }
</script>

<style lang="less" scoped>
    body{
        width:100vw;
        // background: #fff;
    }
    div{
        overflow: hidden;
    }
    .header{
        position: fixed;
        width: 100%;
        height:60px;
        background-color: #fff;
        color: #111;
        font-size: 20px;
        font-family:  "cursive", "Comic Sans MS", "Comic Sans";
       span{
           margin: 10px 5px;
           &:nth-child(1){
               line-height: 40px;
               float: left;
               font-size: 50px;
           }
           &:nth-child(2){
               margin-top: 30px;
               float: left;
           }
           &:nth-child(3){
               line-height: 35px;
               float: right;
           }
       }

    }
    
    .container{
        width:100%;
        height: 100vh;
        background: url('http://image.wufazhuce.com/FlggtVQa7ruoHXRNB1CAfhQJylNn') no-repeat;
        background-size:  cover;
        .envelop{
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(0,0,0,0),rgba(0,0,0,.9));
            .fonts{
                position: absolute;
                bottom: 40px;
                margin: 30px;
                color: #fff;
                h1{
                    font-size: 50px;
                    font-weight: 100;
                }
                h3{
                    font-weight: 100;
                    margin:10px 0;
                }
                p{
                    letter-spacing: 2px;
                    line-height: 25px;
                    color: #fff;
                    font-size: 18px;
                }
                span{
                    display: block;
                    font-size: 40px;
                    font-weight: 100;
                    text-align: center;
                }
            }
        }
        
    }
    
</style>
