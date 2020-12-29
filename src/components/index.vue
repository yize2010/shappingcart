<template>
<goodlist :goods=goodslist> // 此处将goodlist的数组传给子组件的goods ， 子组件是goodlist

</goodlist>
</template>

<script>
import goodlist from './goodlist' // 引入子组件，将父组件传的goodlist传给子组件，父组件中是商品的信息
export default {
  name: 'index',
  components: { // 引入子组件的固定写法
    goodlist
  },
  data () {
    return {
      goodslist: [ // 保存商品信息的子组件
        {
          id: 1,
          name: '小米9',
          src: require('../assets/goodlist/xiaomi_9.jpg'),
          price: 2999
        },
        {
          id: 2,
          name: '小米9SE',
          src: require('../assets/goodlist/xiaomi_9se.jpg'),
          price: 1999
        },
        {
          id: 3,
          name: 'Redmi Note 7',
          src: require('../assets/goodlist/redmi_note7.jpg'),
          price: 999
        },
        {
          id: 4,
          name: '小米Play',
          src: require('../assets/goodlist/xiaomi_play.png'),
          price: 1099
        },
        {
          id: 5,
          name: '小米8青春版',
          src: require('../assets/goodlist/xiaomi_8.jpg'),
          price: 1499
        },
        {
          id: 6,
          name: '小米8 SE',
          src: require('../assets/goodlist/xiaomi_8se.jpg'),
          price: 1599
        },
        {
          id: 7,
          name: '小米6X',
          src: require('../assets/goodlist/xiaomi_6x.jpg'),
          price: 1599
        },
        {
          id: 8,
          name: '红米6A',
          src: require('../assets/goodlist/hongmi_6A.jpg'),
          price: 549
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
