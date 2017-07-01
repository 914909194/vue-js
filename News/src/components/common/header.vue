<template>
  <div class="header">
    <div class="log">
        <div class="left">
          <img src="./left.png" alt="">
        </div>
        <div class="right">
          <img src="./right.png" alt="">
        </div>
    </div>
    <ul class='nav'>
      <li @click='run(0)'><router-link to="/news/all">全部</router-link></li>
      <li @click='run(1)'><router-link to="/news/good">精华</router-link></li>
      <li @click='run(2)'><router-link to="/news/weex">weex</router-link></li>
      <li @click='run(3)'><router-link to="/news/share">分享</router-link></li>
      <li @click='run(4)'><router-link to="/news/ask">问答</router-link></li>
      <li @click='run(5)'><router-link to="/news/job">招聘</router-link></li>
   </ul>
   <div class="nav-scroll"></div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      

    }
  },
  methods:{
     run:function(idx){
      $('.nav-scroll').css({'left':$('.nav-scroll').width()*idx});
     }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .header{
   background-color: #474a4f; 
   width: 100%;
    position:fixed;
    top: 0;
  }
  .nav-scroll{
    width: 16.7%;
    height: 3px;
    background: #f00;
    position: absolute;
    bottom: 0;
    -webkit-transition:all 0.5s ease 0s ;
  }
  .log{
    width: 100%;
    height: 1rem;
   border-bottom:1px solid #fff;
    overflow: hidden;
  }
  .log .left{
    height: 1rem;
    width: 1rem;
    float: left;
  }
  .log .left img{
    height: 1rem;
    width: 1rem;
  }
  .log .right{
    height: 1rem;
    width: 1rem;
    float: right;
    text-align: center;
   
  }
  .log .right img{
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.25rem

  }
  .nav {
    width: 100%;
    height: 1rem;
    /*background: rgba(0,0,0,1);*/
    color: #fff;
    display: -webkit-flex;
  }
  .nav a{
    color: #ccc;
  }
  .nav a.router-link-active{
    color: #fff;
  }
  .nav li{
    flex:1;
    float: left;
    text-align: center;
    line-height: 1rem ;
  }

</style>
