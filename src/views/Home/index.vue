<template>
  <div>
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
    </div>
    <div class="flexbox">
      <van-grid>
        <van-grid-item icon="photo-o" text="整租" />
        <van-grid-item icon="photo-o" text="合租" />
        <van-grid-item icon="photo-o" text="地图找房" />
        <van-grid-item icon="photo-o" text="去出租" />
      </van-grid>
    </div>
    <div class="group">
      <div class="navbar">
        <van-nav-bar
          left-text="试用组"
          right-text="更多"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>
      <div class="box" :column-num="2">
        <van-card
          class="img-box"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
        <van-card
          class="img-box"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
        <van-card
          class="img-box"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
        <van-card
          class="img-box"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
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
    onClickLeft() {
      // Toast('返回')
    },
    onClickRight() {
      // Toast('按钮')
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.group {
  .img-box {
    // width: 50%;
  }
}
</style>
