<template>
  <div>
    <van-nav-bar
      title="账号登录"
      left-arrow
      class="navbar"
      @click-left="onClickLeft"
    >
      <template #left>
        <van-icon class="navbar-icon" name="arrow-left" /> </template
    ></van-nav-bar>
    <van-form @submit="login">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <van-button block style="border: none">还没有账号，去注册~</van-button>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onSubmit(values) {
      console.log('submit', values)
    },
    async login() {
      try {
        const res = await login(this.username, this.password)
        console.log('登录成功', res)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('登录失败', err)
        } else {
          console.log('登录错误，请稍后重试', err)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #eee;
  }
  :deep(.navbar-icon) {
    color: #eee;
  }
}
.van-button--info {
  background-color: #21b97a;
}
</style>
