<template>
  <div class="about">
    <div class="header">
      <span>登录</span>
      <span>注册</span>
    </div>
    <input type="text" placeholder="请输入accessToken" >
    <button class="loading">登录</button>
    <button class="loading"><img src="./如何.png" alt="">如何获取ACCESSTOKEN</button>
    <common-footer></common-footer>
  </div>
</template>

<script>

  import CommonFooter from '../common/footer'
 
 

export default {
  data() {
    return {
      
    }
  },
  components:{
    CommonFooter
  },

  mounted:function(){  
    // this.$emit('run','1');
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";


</style>