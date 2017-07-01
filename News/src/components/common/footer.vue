<template>
  <div class="footer" >
    <ul class='footer-nav'>
      <li>
        <router-link to="/news/all">
            <img src="./首页.png" alt=""><span>首页</span>
        </router-link>
      </li>
      <li>
         <router-link to="/msg">
           <img src="./信息.png" alt=""><span>信息</span>
        </router-link>

      </li>
      <li >
         <router-link to="/about">
             <img src="./我的.png" alt=""><span>我的</span>
          </router-link>
      </li>
      <li >
          <router-link to="/more">
            <img src="./更多.png" alt=""><span>更多</span>
          </router-link>
      </li>

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
      background: #474a4f;
      /*background: skyblue;*/
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
      /*color: red;*/
      
    }
    .footer ul li img{
       margin-top: 0.1rem;
        width: 0.4rem;
        height: 0.4rem;
    }
    .footer ul li span{
      position: absolute;
      height: 0.5rem;
      width: 1rem;
      left: 0.3rem;
      bottom: 0.3rem;
      /*color: red;*/

    }   
    .footer-nav li a{
      outline: none;
      color: #ccc;
    }
    .footer-nav li a.router-link-active{
      color: red;
    }


</style>