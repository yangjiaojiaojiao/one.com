<template>
    <div class="read-centainer">
        <div class="header">
            <span>  </span>
            <span>  </span>
            <span>气候 地理位置</span>
        </div>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
.read-centainer{
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
}

</style>
