<template>
  <div class="wrapper">
    <common-header> </common-header>
    <!-- <news-content></news-content> -->
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>

  import CommonHeader from '../common/header'
  import CommonFooter from '../common/footer'
  // import NewsContent from './NewsContent'
 

export default {
  data() {
    return {
    }
  },
  components:{
    CommonHeader,
    // NewsContent ,
    CommonFooter
  },

  mounted(){  
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";


</style>
