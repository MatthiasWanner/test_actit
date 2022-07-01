<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import RandomBubble from './components/RandomBubble.vue';
import {
  randomizeTailwindColor,
  randomizeTailwindNuance,
  randomizeTailwindSize,
} from './utils';
</script>

<template>
  <img class="m-auto" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <RandomBubble
    class="m-auto"
    :color="randomizeTailwindColor()"
    :nuance="randomizeTailwindNuance()"
    :size="randomizeTailwindSize()"
  />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
