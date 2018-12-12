<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.footShow"></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {reqCategorys} from './api/index.js'
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  name: 'App',
  components:{
    FooterGuide
  },
  mounted(){
    this.getGeohash()
    
  },
  methods:{
    ...mapActions(['getGeohash'])
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  width: 100%;
  height: 100%;
  /*background: #f5f5f5;*/
  position: relative;
</style>
