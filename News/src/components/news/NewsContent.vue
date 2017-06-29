<template>
  <div class="content">
    <div class="content-list" v-for='(msg,index) in msgList'>
      <div class="img">
        <img :src="msg.author.avatar_url" alt="">
      </div>
      <div class="msg">
        <p class="title">
          <span class="top" v-if='msg.top'>置顶</span>
          <span class="good" v-if='msg.good&&!msg.top'>精华</span>
          <span class="share" v-if="msg.tab=='share'&&!msg.top&&!msg.good">分享</span>
          <span class="ask" v-if="msg.tab=='ask'">问答</span>
          <span class="job" v-if="msg.tab=='job'">招聘</span>

          &nbsp&nbsp 
          <span class='tit'>{{msg.title}}</span> 
        </p>
        <div class="msg-item">
          <span><img src="./回复.png" alt="">&nbsp{{msg.reply_count}}</span>
          <span><img src="./查看.png" alt="">&nbsp{{msg.visit_count}}</span>
          <span>1小时</span>
        </div>
      </div>
    </div>
    <div class="loading" v-show="show">
        <span><img src="../../assets/img/loading.gif"></span>
    </div> 
  </div>
</template>

<script>
  import Axios from 'axios'
  import $ from 'jquery'

export default {
  props:['title'],
  data() {
    return {
     msgList:[],
     show:false,
     page:1,
     time:[]
     // oldtime:0
    }
  },
  computed:{
    address(){
      return 'https://www.vue-js.com/api/v1/topics?tab='+this.title+'&page='+this.page
      
    }
  },
  mounted:function() {
     this.loadData();
      var _this = this;
      $(window).scroll(function(){
          var windowHeight = $(this).height();
          var scrollTop = $(this).scrollTop();
          var height = $(document).height();
          if(windowHeight + scrollTop >= height){
            _this.show = true;
            _this.loadData();
          };
      });


  },
  methods:{
      loadData(){
        Axios.get(this.address).then((res)=>{
          this.msgList=this.msgList.concat(res.data.data);
          // console.log(this.msgList);  
          this.page++;
          this.show = false;


          var newTime=new Date().getTime();
          var oldTime = res.data.data[0].last_reply_at;
          var sTime=new Date(oldTime).getTime();
          var numTime=newTime-sTime;
          // console.log(numTime);
          var minutes=numTime/60000;
          var hourse=minutes/60;
          var day=hourse/24;
          var month=day/30;
        });
      }
    
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";
  .content{
   
    background: #ccc;
    margin-top: 2rem;
    margin-bottom: 1rem;
    width: 100%;
    
  }
  .content-list{
    box-sizing: border-box;
    background: #fff;
    width: 100%;
    /*margin:0.2rem 0;*/
    display:-webkit-flex;
  }
  .img{
    flex:1;
    padding:0.2rem;
    height: 1.5rem;
    
  }
  .msg{
    flex:5;
    padding:0.2rem;
    height: 1.5rem;


  }
 /* .tit{
    position: absolute;

    overflow: hidden;
  }*/
  .title{   
    overflow: hidden;
    width: 100%;
    /*height: 0.8rem;*/
  }
  .title span{
    color: #fff;
  }
  .top {
    border: 1px solid green;
    border-radius: 3px;
    background: green;
  }
  .good{
    border: 1px solid green;
    border-radius: 3px;
    background: green;
  }
  .title .tit{
    color: #000;
  }

  .share,.ask,.job{
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #ccc;
  }
  .msg img{
    width: 0.3rem;
    height: 0.3rem;
  }
  .msg-item{
    width: 100%;
    margin-left: 0.1rem;
    margin-bottom: 0.1rem;
    margin-top:0.2rem;
   /* position: absolute;
   left: 0.1rem;
   bottom:0.1rem;*/
    overflow: hidden;
  }
  .msg-item span:nth-child(1){
    float: left;
    margin-right: 0.1rem;
  }
  .msg-item span:nth-child(2){
    float: left;
    margin-left: 0.1rem;
  }
  .msg-item span:nth-child(3){
    float: right;
   /* margin-right: 0.2rem;*/
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #ccc;
  }
   .loading{
    text-align: center;
  }
</style>