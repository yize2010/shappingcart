<template>
<div>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <h3 >商品列表</h3>
      </div>
      <a href="javascript:void(0)" @click="$go('/cart')"> <!-- 路由，将导入购物车页面-->
        <span class="badge pull-right">{{number}}
        </span>
        <img class="pull-right" src="../assets/cart/cart.jpg" alt="图片"/>
      </a>
    </div>
  </nav>
</div>
</template>

<script>
// 显示i导航栏
export default {
  name: 'navb',
  computed: {
    // 获取购物车里商品的数量
    number: function () {
      return this.$store.state.lists.length
    }
  }
}
</script>

<style scoped>
h3 {
  margin-left: 250px;
}
img {
  width: 50px;
  height: 50px;
}
</style>
