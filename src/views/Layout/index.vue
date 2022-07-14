<template>
  <div class="layout-container">
    <van-tabbar v-model="active" class="layout-tabbar">
      <van-tabbar-item to="/home"
        ><i slot="icon" class="haoke hk31shouye"> </i>
        <span class="text">首页</span></van-tabbar-item
      >
      <van-tabbar-item to="/house"
        ><i slot="icon" class="haoke hkchazhaofangyuan"> </i>
        <span class="text">找房</span></van-tabbar-item
      >
      <van-tabbar-item to="/real"
        ><i slot="icon" class="haoke hk188"> </i>
        <span class="text">资讯</span></van-tabbar-item
      >
      <van-tabbar-item to="/my"
        ><i slot="icon" class="haoke hk31wode"> </i>
        <span class="text">我的</span></van-tabbar-item
      >
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  .layout-tabbar {
    i.haoke {
      font-size: 25px;
    }
  }
}
</style>
