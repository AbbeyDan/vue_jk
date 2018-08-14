<template>
  <div id="home">
    
     <!-- 引入顶部 -->
      <vue-head></vue-head>
     <router-view></router-view>
      <vue-foot></vue-foot>

  </div>
</template>

<script>
import Head from "./Common/Head.vue";
import Foot from "./Common/Foot.vue";
export default {
  name: "Home",
    components: {
    "vue-head": Head,
    "vue-foot": Foot
  }
};
</script>

<style>

</style>
