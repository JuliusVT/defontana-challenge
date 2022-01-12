<template>
  <div id="app">
    <Navigation />
    <div class="content-main">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/layouts/Navigation.vue'
import Footer from '@/components/layouts/Footer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content-main{
  min-height: calc(100vh - 130px);
  padding-top: 80px;
  padding-bottom: 80px;
}
</style>
