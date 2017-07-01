<template>
  <div class="msg">
    <div class="header">
      我的消息
    </div>
    <router-link to="/about"><button class="loading">请先登录</button></router-link>
      
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
  .msg{
    width: 100%;
  }
  .header{
    width: 100%;
    height: 1rem;
    background:#474a4f;
    font-size: 0.4rem;
    text-align: center;
    line-height: 1rem;
    color: #fff;
  }
  .loading{
    display: block;
    margin:50% auto;
    color: #fff;
    width: 2rem;
    height: 1rem;
    background: #ccc;
    border: 0px;
    font-size: 0.4rem;
  }

</style>