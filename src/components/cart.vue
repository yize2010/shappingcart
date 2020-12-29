<template>
 <div class="container">
   <div  class="panel panel-default">
   <div class="panel-heading">
     <h3 class="panel-title">购物车</h3>
     <div class="panel-body">
       <table class="table table-striped">
       <thead>
       <tr><button class="btn" @click="selectAll">全选</button></tr>
         <tr>
         <th></th>
         <th>商品</th>
           <th></th>
         <th>单价</th>
         <th>数量</th>
         <th>总价</th>
           <th>操作</th>
         </tr>
       </thead>
       <tbody v-for="(good, index) in goods" :key="index"> <!-- 循环遍历数组，获取数据-->
         <td><input type="checkbox" v-model="good.type"/></td>
         <td>{{good.name}}</td>
         <td><img :src="good.src"></td>
         <td>{{good.price}}</td>
         <td><button class="btn btn-sm"  @click="reduce(index)">  - &nbsp;</button>&nbsp;&nbsp;{{good.count}}&nbsp;&nbsp;
             <button class="btn btn-sm"  @click="add(index)" > + </button>
         </td>
         <td>{{good.price * good.count}}</td>
         <td><button class="btn" @click="dele(index)">删除</button></td>
       </tbody>
       </table>
       <div class="pull-right"><p style="color: red; font-size: 20px">￥{{allprice}}</p><button class="btn" @click="success">提交订单</button></div>
     </div>
   </div>
   </div>
 </div>
</template>

<script>
// 购物车页面
export default {
  name: 'cart',
  data () {
    return {
      select: 1 // 判断全选按钮是否被点击，实现全选反选
    }
  },
  computed: {
    // 加入购物车的商品
    goods: function () {
      return this.$store.state.lists // 从store中获取已加入的商品传给goods， 此处用到vuex的技术
    },
    allprice: function () { // 计算所有加入购物车的总价
      let sum = 0
      for (let i = 0; i < this.goods.length; i++) {
        if (this.goods[i].type === true) {
          sum = this.goods[i].count * this.goods[i].price + sum
        }
      }
      return sum
      // return this.adds(this.goods) // es6 调用的方法
    }
  },
  methods: {
    add: function (index) { // 数量加一
      if (this.goods[index].count < 4) { // 控制数量最大为4件商品
        this.goods[index].count += 1
      }
    },
    reduce: function (index) { // 数量减一
      if (this.goods[index].count > 1) { // 控制商品数量最小为 1件
        this.goods[index].count -= 1
      }
    },
    dele: function (index) { // 删除商品
      this.goods.splice(index, 1)
    },
    selectAll: function () { // 全选， 如果商品奇数次点击，全选，偶数次点击，取消全选
      if (this.select === 0) {
        for (let i = 0; i < this.goods.length; i++) {
          this.goods[i].type = false
        }
        this.select = 1
      } else {
        for (let i = 0; i < this.goods.length; i++) {
          this.goods[i].type = true
        }
        this.select = 0
      }
    },
    success: function () { // 提交订单
      let m = 0
      for (let i = 0; i < this.goods.length; i++) { // 判断用户是否选择商品
        if (this.goods[i].type === true) {
          m = 1
        }
      }
      if (m === 0) {
        alert('请选择商品')
      } else {
        alert('此次消费' + this.allprice)
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 100px;
  width: 100px;
}
</style>
