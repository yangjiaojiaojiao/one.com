<template>
  <div class="app-container">
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/One">
				<span class="fa fa-circle-o"></span><br>
				<span class="mui-tab-label">ONE</span>
			</router-link>
			<router-link class="mui-tab-item" to="/All">
				<span class="mui-icon-extra mui-icon-extra-class"></span><br>
				<span class="mui-tab-label">ALL</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Me">
				<span class="fa fa-user-o"></span><br>
				<span class="mui-tab-label">ME</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
  

  
</script>

<style scoped>
	nav{
		padding-top:3px;
	}	
	nav>a>span:nth-child(1) {		
		color: #111;

	}
	nav>a>span:nth-child(3){
		font-weight: 800;
		color: #111;
		font-size: 5px;
	}
	.mui-active .mui-bar-tab .mui-tab-item.mui-active{		
		color:red;		
	}

</style>
