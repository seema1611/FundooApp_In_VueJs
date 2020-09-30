<template>
  <div id="app">
    <FundooAppMain />
  </div>
</template>

<script>
import FundooAppMain from "./components/FundooAppMain";
export default {
  name: "App",
  components: {
    FundooAppMain,
  },
};
</script>

<style>
#app {
  width: 100%;
  min-height: 750px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  color: #2c3e50;
}
</style>
