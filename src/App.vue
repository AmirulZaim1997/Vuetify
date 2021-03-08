<template>
  <v-app>
    <div id="app">
      <app-toolbar></app-toolbar>
      <router-view />

      <app-footer ></app-footer>
    </div>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'
export default {
  name: "App",
  components:{AppFooter,AppToolbar}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #377fc7;
}
</style>
