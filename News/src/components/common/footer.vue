<template>
  <div class="footer" >
    <ul class='footer-nav'>
      <li><img src="./首页.png" alt=""><span>首页</span></li>
      <li ><img src="./信息.png" alt=""><span>信息</span></li>
      <li ><img src="./我的.png" alt=""><span>我的</span></li>
      <li ><img src="./更多.png" alt=""><span>更多</span></li>

    </ul>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  }
 

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
    .footer{
      height: 1rem;
      position:fixed;
      bottom: 0;
      width: 100%;
      z-index: 20;
      background-color: #474a4f
    }
    .footer ul{
      display: flex;
    }
    .footer ul li{
      position: relative;
      flex:1;
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      /*font-size: 14px;*/
      color: #fff;
      
    }
    .footer ul li img{
       margin-top: 0.1rem;
        width: 0.4rem;
        height: 0.4rem;
    }
    .footer ul li span{
      /*text-align: center;*/
      position: absolute;
      height: 0.5rem;
      width: 1rem;
      left: 0.3rem;
      bottom: 0.3rem;
    }   
    .footer ul li a{
      outline: none;
      color: #ccc;
    }
    .footer ul li a.router-link-active{
      color: #fff;
    }


</style>