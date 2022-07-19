<template>
  <div>
    <header>
      <div class="navbar">
        <div class="box-left"><van-icon name="arrow-left" /></div>
        <div class="box-main">
          <div class="box-text">北京<span class="haoke hkxiala"></span></div>
          <div class="box-find">
            <span><van-icon name="search" /></span>请输入小区或地址
          </div>
        </div>
        <div class="box-right"><span class="haoke hkdituzhaofang"></span></div>
      </div>
    </header>
    <main>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  height: 50px;
  align-items: center;
  padding: o 10px;
  background-color: #21b97a;
  .box-left {
    flex: 1;
    font-size: 16px;
    color: #fff;
  }
  .box-main {
    flex: 6;
    width: 275px;
    height: 34px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    .box-text {
      flex: 1;
      padding: 0 10px;
      font-size: 14px;
      color: #333;
      border-right: 2px solid #e5e5e5;
    }
    .box-find {
      flex: 4;
      padding-left: 12px;
      font-size: 13px;
      color: #9c9fa1;
    }
  }
  .box-right {
    flex: 1;
    .haoke {
      width: 25px;
      height: 25px;
      box-sizing: border-box;
      margin-left: 15px;
      font-size: 16px;
      border: 3px solid #fff;
      border-radius: 50%;
      color: #fff;
    }
  }
}
</style>
