<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <Header />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Footer
  }
}
</script>

<style>

</style>
