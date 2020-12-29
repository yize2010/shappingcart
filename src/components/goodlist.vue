<template>
  <div class="container">
    <ul v-for="(good, index) in goods" :key="index">
      <span>
        <a href="javascript:void(0)" @click="$go('/detail', index+1)">
          <li class="col-lg-3">
              <img :src="good.src"/><br/>
              {{good.name}}<br/>
            <h3>￥{{good.price}}</h3>
          </li>
        </a>
      </span>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'goodlist',
  props: {
    goods: [Array] // 接受父组件传过来的数组 他的父组件是index.vue
  }
}
</script>

<style scoped>
  li {
    list-style:none;
  }
  h1 {
    color:cornflowerblue;
  }
  h3 {
    color: red
  }
</style>
