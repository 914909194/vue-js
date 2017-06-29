<template>
  <news-content :title='title'></news-content>
</template>

<script>

  import NewsContent from '../news/NewsContent'
 
 

export default {
  data() {
    return {
      title:'all'
    }
  },
  components:{
    NewsContent
  },

  mounted(){  
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../assets/css/reset.css";


</style>