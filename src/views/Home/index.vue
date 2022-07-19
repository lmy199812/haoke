<template>
  <div class="home">
    <div class="header">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        style="height: 212px"
      >
        <van-swipe-item
          ><img style="width: 100%; height: 212px" src="~@/assets/1.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img style="width: 100%; height: 212px" src="~@/assets/2.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img style="width: 100%; height: 212px" src="~@/assets/3.png" alt=""
        /></van-swipe-item>
      </van-swipe>
      <div class="box-main">
        <div class="box-text">北京<span class="haoke hkxiala"></span></div>
        <div class="box-find">
          <span><van-icon name="search" /></span>请输入小区或地址
          <span class="haoke hkditu"></span>
        </div>
      </div>
    </div>
    <div class="flexbox">
      <van-grid :border="false">
        <div class="grid-box flexbox-nav">
          <van-grid-item text="整租"
            ><template #icon> <span class="haoke hk31shouye"></span> </template
          ></van-grid-item>
        </div>
        <div class="grid-box flexbox-nav">
          <van-grid-item text="合租"
            ><template #icon> <span class="haoke hkshuangren"></span> </template
          ></van-grid-item>
        </div>

        <div class="grid-box flexbox-nav">
          <van-grid-item text="地图找房">
            <template #icon>
              <span class="haoke hkdituzhaofang"></span>
            </template>
          </van-grid-item>
        </div>
        <div class="grid-box flexbox-nav">
          <van-grid-item text="去出租">
            <template #icon>
              <span class="haoke hkchuzuwu"></span>
            </template>
          </van-grid-item>
        </div>
      </van-grid>
    </div>
    <div class="group">
      <div class="navbar">
        <van-nav-bar
          left-text="试用组"
          right-text="更多"
          @click-right="onClickRight"
        />
      </div>
      <div class="group-nav">
        <van-row>
          <van-col span="12" class="group-nav-box">
            <van-row type="flex" align="center" justify="space-around">
              <van-col class="group-box"
                ><img src="../../assets/R-C.jpeg" alt=""
              /></van-col>
              <van-col class="group-text"
                ><p>家住回龙观</p>
                <p>归属的感觉</p></van-col
              >
            </van-row>
          </van-col>
          <van-col span="12" class="group-nav-box"
            ><van-row type="flex" align="center" justify="space-around">
              <van-col class="group-box"
                ><img src="../../assets/R-C.jpeg" alt=""
              /></van-col>
              <van-col class="group-text"
                ><p>宜居四五环</p>
                <p>大都市生活</p></van-col
              >
            </van-row></van-col
          >
        </van-row>
        <van-row>
          <van-col span="12" class="group-nav-box"
            ><van-row type="flex" align="center" justify="space-around">
              <van-col class="group-box"
                ><img src="../../assets/R-C.jpeg" alt=""
              /></van-col>
              <van-col class="group-text"
                ><p>大都市生活</p>
                <p>喧嚣三里屯</p></van-col
              >
            </van-row></van-col
          >
          <van-col span="12" class="group-nav-box"
            ><van-row type="flex" align="center" justify="space-around">
              <van-col class="group-box"
                ><img src="../../assets/R-C.jpeg" alt=""
              /></van-col>
              <van-col class="group-text"
                ><p>比邻十号线</p>
                <p>地铁心连心</p></van-col
              >
            </van-row></van-col
          >
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClickRight() {
      // Toast('按钮')
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #f6f5f6;
  height: calc(100vh - 80px);
  .header {
    position: relative;
  }
  .box-main {
    position: absolute;
    top: 10%;
    left: 10%;
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
      border-right: 1px solid #e5e5e5;
    }
    .box-find {
      flex: 4;
      padding-left: 12px;
      font-size: 13px;
      color: #9c9fa1;
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.navbar {
  background-color: #fff;
  color: #fff;
  .van-button {
    width: 280px;
    height: 32px;
    background-color: #fff;
  }
  :deep(.van-nav-bar__title) {
    max-width: unset;
  }
  .van-button__text {
    color: #9c9fa1;
  }
  .van-icon-search {
    color: #9c9fa1;
  }
  .van-button--default {
    border: 0.02667rem solid #5babfb;
  }
}
.flexbox {
  width: 100%px;
  height: 100px;
  :deep(.flexbox-nav) {
    width: 91px;
    height: 120px;
    font-size: 14px;
    .haoke {
      width: 60px;
      height: 60px;
      font-size: 40px;
      color: #0fb36f;
      border: 1px solid #f2fbf7;
      background-color: #f2fbf7;
      border-radius: 50%;
    }
  }
}
.group {
  .group-nav {
    margin: 10px 0;
    .van-row {
      width: 100%;
      height: 100px;
    }
    :deep(.group-box) {
      img {
        width: 50px;
        height: 50px;
      }
    }
    :deep(.group-text) {
      font-size: 14px;
      color: #333;
    }
    .group-nav-box {
      width: 160px;
      height: 100%;
      margin: 5px 5px 5px 15px;
      background-color: #fff;
    }
  }
}
</style>
