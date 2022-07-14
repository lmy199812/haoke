<template>
  <div class="my-container">
    <div class="header">
      <img class="img-bg" src="~@/assets/bg.png" alt="" />
      <div class="my-box">
        <div class="my-pic">
          <img class="img-bg" src="../../assets/avatar.png" alt="" />
        </div>
        <div class="my-info">
          <div class="my-user">
            <div class="my-name">游客</div>
            <div class="my-btn">
              <van-button type="primary">去登录</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <van-grid :column-num="3">
        <van-grid-item text="我的收藏"></van-grid-item>
        <van-grid-item text="我的出租"></van-grid-item>
        <van-grid-item text="看房记录"></van-grid-item>
        <van-grid-item text="成为房主"></van-grid-item>
        <van-grid-item text="个人资料"></van-grid-item>
        <van-grid-item text="联系我们"></van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.my-container {
  .header {
    height: 300px;
    // background-color: aqua;
    position: relative;
    .img-bg {
      width: 100%;
    }
    .my-box {
      width: 320px;
      height: 200px;
      position: absolute;
      margin-left: 25px;
      left: 0;
      bottom: 0;
      .my-pic {
        width: 60px;
        height: 60px;
        margin-left: 45%;
        position: absolute;
        top: 15%;
        // margin-top: 40px;
        .img-a {
          width: 100%;
          border: 4px solid #f5f5f5;
        }
      }
      .my-info {
        width: 260px;
        height: 160px;
        margin-left: 30px;
        margin-top: 40px;
        background-color: #fff;
        .my-user {
          position: absolute;
          text-align: center;
          margin-top: 60px;
          margin-left: 33%;
          .my-name {
            font-size: 18px;
          }
          .my-btn {
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
