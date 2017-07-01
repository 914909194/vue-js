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
          <span class='tit'>{{msg.title}}</span> 
        </p>
        <div class="msg-item">
          <span><img src="./回复.png" alt="">&nbsp{{msg.reply_count}}</span>
          <span><img src="./查看.png" alt="">&nbsp{{msg.visit_count}}</span>
          <span>{{time[index]}}</span>
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
          //计算时间 判断多久之前发帖
          this.time=[];
          for(var i=0;i<this.msgList.length;i++){
            var newTime=new Date().getTime();
            var oldTime = this.msgList[i].last_reply_at;
            var sTime=new Date(oldTime).getTime();
            var numTime=newTime-sTime;
            var minutes=numTime/60000;
            var hourse=minutes/60;
            var day=hourse/24;
            var month=day/30;
            if(minutes>1&&minutes<60){
              var msgTime=parseInt(minutes);
              this.time.push(msgTime+'分钟前')
            }else if(hourse>1&&hourse<24){
              var msgTime=parseInt(hourse);
              this.time.push(msgTime+'小时前')
            }else if(day>1&&day<30){
              var msgTime=parseInt(day);
              this.time.push(msgTime+'天前')
            }else if(month>1&&month<12){
              var msgTime=parseInt(month);
              this.time.push(msgTime+'月前')
            }else{
              this.time.push('刚刚')
            }
          }    
          // console.log(this.time.length)
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
    background: #fff;
    width: 100%;
    margin:0.1rem 0;
    display:-webkit-flex;
  }
  .img{
    flex:1;
    padding:0.2rem;
    /*height: 1.5rem;*/
    
  }
  .msg{
    flex:5;
    padding:0.2rem;
   /* height: 1.5rem;*/
    /*position: relative;*/
  }
  .title{   
    /*overflow: hidden;*/
    width: 100%;
    /*height: 0.8rem;*/
  }
  .title span{
    color: #fff;
    margin-right: 0.1rem;
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
    padding-top:0.2rem;
    overflow: hidden;
  }
  .msg-item span{
    color: #f1c;
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
    border-radius: 5px;
  }
   .loading{
    text-align: center;
  }
</style>