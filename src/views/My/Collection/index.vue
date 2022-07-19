<template>
  <div>
    <div>
      <van-nav-bar
        class="header"
        title="收藏列表"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div
      class="every-item"
      v-for="item in CollectionList"
      :key="item.houseCode"
      @click="$router.push('/newpage')"
    >
      <van-row>
        <van-col span="8">
          <img :src="`${userUrl}${item.houseImage}`" alt="" class="img-left" />
        </van-col>
        <van-col span="16">
          <van-row class="item-title">{{ item.title }}</van-row>
          <van-row class="item-desc">{{ item.desc }}</van-row>
          <van-row class="item-tags">{{ item.tags[0] }}</van-row>
          <van-row class="item-price"
            >{{ item.price }}<span style="font-size: 12px">元/月</span></van-row
          >
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getCollectionList } from '@/api'
export default {
  data() {
    return {
      CollectionList: [],
      userUrl: 'http://liufusong.top:8080'
    }
  },
  created() {
    this.getCollectionList()
  },
  methods: {
    async getCollectionList() {
      try {
        const { data } = await getCollectionList()
        console.log(data)
        this.CollectionList = data.body
        console.log(this.CollectionList)
      } catch (error) {
        this.$toast.fail('获取列表失败', error)
      }
    },
    onClickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 45px;
  background-color: #21b97a;
  font-size: 18px;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
.every-item {
  width: 100%;
  height: 105px;
  border-bottom: 1px solid rgb(229, 229, 229);
  .img-left {
    width: 106px;
    height: 80px;
    margin-top: 15px;
  }
  .item-title {
    margin-top: 20px;
    font-size: 15px;
    color: #394043;
    font-weight: 700;
  }
  .item-desc {
    margin-top: 3px;
    font-size: 12px;
    color: #afb2b3;
  }
  .item-tags {
    width: 50px;
    height: 15px;
    margin-top: 3px;
    text-align: center;
    font-size: 12px;
    color: #39becd;
    background-color: #e1f5f8;
  }
  .item-price {
    margin-top: 3px;
    font-size: 16px;
    font-weight: 700;
    color: #fa5741;
  }
}
</style>
