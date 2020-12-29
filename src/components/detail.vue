<template>
  <div class="container" >
    <div v-for="(good, index) in goodslist" v-if="index === goodid - 1" :key="index">
      <!--左边显示图片 -->
      <img class="col-lg-6" :src="good.src" >
      <!-- 右边显示信息-->
      <h2> {{good.name}}</h2>
      <h4> {{good.showinfo}}</h4>
      <h4>￥{{good.price}}</h4>
      <button class="btn" @click="addcart(index+1)">加入购物车</button>
    </div>
  </div>
</template>

<script>
// 此组件是详情页面，通过获取路由传回来的id获取点击事件的商品id，从而定位到显示商品的信息
export default {
  name: 'detail',
  data () {
    return {
      goodid: Number(this.$route.query.id), // 获取商品信息的id，从路由中获取
      goodslist: [ // 保存商品信息的详情
        {
          id: 1,
          type: false,
          name: '小米9',
          src: require('../assets/goodlist/xiaomi_9.jpg'),
          showinfo: '骁龙855 索尼4800万超广角微距三摄',
          price: 2999,
          count: 1
        },
        {
          id: 2,
          type: false,
          name: '小米9SE',
          src: require('../assets/goodlist/xiaomi_9se.jpg'),
          showinfo: '索尼4800万超广角三摄，骁龙712',
          price: 1999,
          count: 1
        },
        {
          id: 3,
          type: false,
          name: 'Redmi Note 7',
          src: require('../assets/goodlist/redmi_note7.jpg'),
          showinfo: '4800万拍照千元机，18个月超长质保',
          price: 999,
          count: 1
        },
        {
          id: 4,
          type: false,
          name: '小米Play',
          src: require('../assets/goodlist/xiaomi_play.png'),
          showinfo: '5.84"小水滴全面屏，后置1200万 AI',
          price: 1099,
          count: 1
        },
        {
          id: 5,
          type: false,
          name: '小米8 青春',
          src: require('../assets/goodlist/xiaomi_8.jpg'),
          showinfo: '潮流镜面渐变色，2400万自拍旗舰',
          price: 1499,
          count: 1
        },
        {
          id: 6,
          type: false,
          name: '小米8 SE',
          src: require('../assets/goodlist/xiaomi_8se.jpg'),
          showinfo: '三星 AMOLED 全面屏，骁龙710',
          price: 1599,
          count: 1
        },
        {
          id: 7,
          type: false,
          name: '小米6X',
          src: require('../assets/goodlist/xiaomi_6x.jpg'),
          showinfo: '轻薄美观的拍照手机',
          price: 1599,
          count: 1
        },
        {
          id: 8,
          type: false,
          name: '红米6A',
          src: require('../assets/goodlist/hongmi_6A.jpg'),
          showinfo: '12nm高性能处理器，1300万高清相机',
          price: 549,
          count: 1
        }
      ]
    }
  },
  watch: { // 路由改变，对路由重新刷新
    '$route': 'regoodid'
  },
  methods: {
    regoodid () { // 刷新路由的id
      this.goodid = Number(this.$route.query.id) // 获取路由的传入的id，定位商品的id
    },
    addcart: function () {
      this.$store.state.lists.push(this.goodslist[this.goodid - 1]) // 将此商品加入购物车，实质加入store，利用vuex的技术，全局存储信息
      alert('已加入购物车')
    }
  }
}
</script>

<style scoped>
  img {
    width: 420px;
    height: 420px;
  }
  h2 {
    color:red;
  }
  h4 {
    margin-top: 50px;
  }
  button {
    margin-top: 150px;
    color:red;
  }
</style>
