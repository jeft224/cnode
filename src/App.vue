<template>
  <div id="app">
    <c-header v-if="headerShow" fixed :icon="iconType"></c-header>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import CHeader from './components/cheader'
export default {
  name: 'app',
  data(){
    return {
      headerShow:true,
      iconType:true
    }
  },
  created() {
    if (this.$route.name == "login") {
        console.log("login")
        this.headerShow = false
    }
    if (this.$route.name == "detail") {
        console.log("detail")
        this.iconType = false
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'hideMenuSlide'
  },
  components: {
    CHeader
  },
  methods: {
    ...mapActions({ setNavState: 'setNavState' }),
    // 隐藏MenuSlide
    hideMenuSlide() {
      this.setNavState(false)
    }
  }

}
</script>

<style>
  #app {
    overflow: hidden;
    height: 100%;
    min-height: calc(100vh);
    background:#fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all .2s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
