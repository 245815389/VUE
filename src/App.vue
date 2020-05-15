<template>
  <div id="app">
    <router-view></router-view>

    <TabBar>
      <tab-bar-item path="/find">
        <img slot="item-icon" src="./assets/imgs/发现.svg" alt="">
        <div slot="item-text">发现</div>
      </tab-bar-item>

      <tab-bar-item path="/hot">
        <img slot="item-icon" src="./assets/imgs/爆款.svg" alt="">
        <div slot="item-text">爆款</div>
      </tab-bar-item>

      <tab-bar-item path="/love">
        <img slot="item-icon" src="./assets/imgs/爱心.svg" alt="">
        <div slot="item-text">爱心</div>
      </tab-bar-item>

      <tab-bar-item path="cart">
        <img slot="item-icon" src="./assets/imgs/购物车.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="sign">
        <img slot="item-icon" src="./assets/imgs/签到.svg" alt="">
        <div slot="item-text">签到</div>
      </tab-bar-item>

    </TabBar>

  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'
import TabBarItem from './components/TabBar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}

</script>

<style>
@import "assets/css/base.css";


</style>
