<template>
  <div class="my-container">
    <div class="header" v-if="isLogin">
      <img class="img-bg" src="~@/assets/avatar (1).png" alt="" />
      <div class="my-box">
        <div class="my-pic">
          <img class="img-bg" :src="`${userUrl}${userInfo.avatar}`" alt="" />
        </div>
        <div class="my-info">
          <div class="my-user">
            <div class="my-name">{{ userInfo.nickname }}</div>
            <div class="my-btn">
              <van-button type="primary" @click="logOut">退出</van-button>
            </div>
            <div class="edit">
              <span>编辑个人资料</span><van-icon name="play" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header" v-else>
      <img class="img-bg" src="~@/assets/bg.png" alt="" />
      <div class="my-box">
        <div class="my-pic">
          <img class="img-bg" src="../../assets/avatar.png" alt="" />
        </div>
        <div class="my-info">
          <div class="my-user">
            <div class="my-name">游客</div>
            <div class="my-btn">
              <van-button type="primary" @click="$router.push('/login')"
                >去登录</van-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <van-grid :column-num="3">
        <van-grid-item
          icon="star-o"
          text="我的收藏"
          @click="toCollection"
        ></van-grid-item>
        <van-grid-item
          icon="wap-home-o"
          text="我的出租"
          @click="toMyrent"
        ></van-grid-item>
        <van-grid-item icon="underway-o" text="看房记录"></van-grid-item>
        <van-grid-item icon="newspaper-o" text="成为房主"></van-grid-item>
        <van-grid-item icon="user-o" text="个人资料"></van-grid-item>
        <van-grid-item icon="service-o" text="联系我们"></van-grid-item>
      </van-grid>
    </div>
    <div class="foot">
      <img class="img-b" src="../../assets/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import store from '@/store'
// import { mapState } from 'vuex'
import { getUserInfo } from '@/api'
export default {
  data() {
    return {
      store,
      userInfo: [],
      userUrl: 'http://liufusong.top:8080'
    }
  },
  computed: {
    // ...mapState(['user']),
    isLogin() {
      return !!this.$store.state.user.token
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    logOut() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出'
        })
        .then(() => {
          this.$store.commit('setUser', {})
        })
        .catch(() => {
          console.log('取消')
        })
    },
    async getUserInfo() {
      if (this.isLogin) {
        try {
          const { data } = await getUserInfo()
          this.userInfo = data.body
          console.log(this.userInfo)
        } catch (err) {
          this.$toast.fail('获取数据失败', err)
          console.log(err)
        }
      }
    },
    toCollection() {
      if (this.isLogin === true) {
        this.$router.push('/collection')
      } else {
        this.$router.push('/login')
      }
    },
    toMyrent() {
      if (this.isLogin === true) {
        this.$router.push('/myrent')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
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
      margin-left: 5%;
      left: 0;
      bottom: 0;
      .my-pic {
        width: 60px;
        height: 60px;
        margin-left: 44%;
        position: absolute;
        top: 10%;
        .img-a {
          width: 100%;
        }
      }
      .my-info {
        width: 260px;
        height: 200px;
        margin-left: 30px;
        margin-top: 40px;
        background-color: #fff;
        .my-user {
          position: absolute;
          text-align: center;
          margin-top: 60px;
          margin-left: 29%;
          .my-name {
            font-size: 18px;
            text-align: center;
          }
          .my-btn {
            margin-top: 20px;
          }
          .edit {
            margin-top: 15px;
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
  }

  .middle {
    margin-top: 40px;
  }
  .foot {
    width: 345px;
    height: 85px;
    margin-top: 30px;
    margin-left: 15px;
    .img-b {
      width: 100%;
    }
  }
}
</style>
