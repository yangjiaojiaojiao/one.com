<template>
	<div class="cmt-container" >
		<div>
			<h4>评论内容</h4>
    <hr>
		<div class="box" v-for="item in list" :key="item.id">
			<div class="IdAndDate">
			<div class="left">
				<img :src="item.img" alt="">
				<p>{{ item.name }}</p>
			</div>
			<p>{{ item.date }}</p>
		</div>
		<p class="comment">
			{{ item.container }}
		</p>
		</div>
		</div>		
	</div>
</template>

<script>
	import comment from "../../../mock/comment.js"

	export default {
		data(){
			return{
				list:[]
			}
		},
		created(){
			this.getComInfo();
		},
		methods:{
			getComInfo(){
				
				this.$http.get("/comment").then(result=>{
					var result = result.body;
					if(result.status === 0){
						this.list = result.list
					}else{
						alert('滚...')
					}
				})
			}
		}

	}

</script>

<style lang="less" scoped>
	hr{
		margin:20px 0;
		width:100px;
		background-color: #111;
		height:3px;
	}
	.box{
		margin:20px 0;
	}
	.IdAndDate{
		display: flex;
		justify-content: space-between;
		.left{
			img{
				width: 20px;
				float: left;
			}
			p{
				float: left;
				margin:4px 10px;
			}
		}	
	}
	.comment{
		margin:0 20px;
		font-size: 17px;
		color: #111;
	}
</style>