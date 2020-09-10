<template>
  <div class="main">
    
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from "./link"
export default {
  name: "",
  data() {
    return {};
  },
  components: {
      AppLink
  }
};
</script>


<style scoped>
.main{
    padding: 10px;
    height: 110%;
}
</style> 