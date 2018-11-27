<template>
  <div class="goods-card">
    <h2>{{this.goodsObj.name}}</h2>
    <p><span>价格</span> {{this.goodsObj.price}}</p>
    <div>
      <span class="but-span" @click="reduce(goodsObj.price)">-</span>
      <span>{{this.goodsObj.num}}</span>
      <span class="but-span" @click="add(goodsObj.price)">+</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goods-card",
    data() {
      return {}
    },
    props: {
      goodsObj: Object
    },
    methods: {
      reduce(value) {
        if (this.goodsObj.num > 0) {
          this.goodsObj.num--
          this.$store.dispatch('reduce', value)
        }
      },
      add(value) {
        this.goodsObj.num++
        this.totalNum++
        this.$store.dispatch('add', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.goods-card {
  text-align: center;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  .but-span {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #090;
    color: #fff;
    cursor: pointer;
  }
}
</style>
