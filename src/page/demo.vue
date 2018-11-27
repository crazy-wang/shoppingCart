<template>
  <div class="demo">
    {{allGoodsData}}
    <template v-for="(item, index) in allGoodsData">
      <goods-card :goodsObj="item"></goods-card>
    </template>
    <br>
    <div>
      <h1>
        <li><span>总价：</span> <span>{{totalPrice}}</span></li>
        <li><span>数量：</span> <span>{{totalNum}}</span></li>
      </h1>
    </div>
  </div>
</template>

<script>
  import goodsCard from '@/components/goodsCard'
  import { mapState } from 'vuex'
  export default {
    name: "demo",
    data() {
      return {
        allGoodsData: [
          {
            name: 'ThinkPad-T480',
            price: 20000,
            num: 0,
          },
          {
            name: '摩托罗拉-Z2',
            price: 7800,
            num: 0,
          },
          {
            name: '联想YoGa',
            price: 14800,
            num: 0,
          },
        ]
      }
    },
    components: {
      goodsCard
    },
    computed: {
      ...mapState([
        'totalNum',
        'totalPrice'
      ])
    },
    created() {
      this.$store.dispatch('setGoodsData', this.allGoodsData)
    }
  }
</script>

<style lang="scss" scoped>
.demo {
  width: 30%;
}
</style>
